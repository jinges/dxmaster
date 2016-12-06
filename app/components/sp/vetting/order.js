.controller('vettingOrdersCtrl', ['$scope', '$rootScope', '$stateParams', '$interval', '$timeout', '$state',  'common', 'paths', 
	function ($scope, $rootScope, $stateParams, $interval, $timeout, $state, common, paths) {
		var obj = {};
		var flag = true;
		$scope.status= 2;

		$scope.loadVettingOrders = function () {
			common.get(paths.vettingOrders, {status:1})
				.then(function(data){
					$scope.orders = data.list;
				})
			var goOn =$interval(function(){
				if(!flag) {
					$interval.cancel(goOn);
				}
				common.get(paths.vettingOrders, {status:1})
				.then(function(data){
					$scope.orders = data.list;
				})
			}, 6000);
		};

		$scope.vettingOrder = function () {
			obj.orderId = $stateParams.orderId;

			common.get(paths.vettingOrder, {orderId: obj.orderId})
				.then(function (data) {
					$scope.order = data.list[0];
					obj.openId = $scope.order.openId;
				})
		};

		$scope.submit = function(){
			obj.status = $scope.status;
			common.get(paths.vetting, obj)
				.then(function (data) {
					if(!data){
						return false;
					}
					$state.go('vettingorders');
				})
		}

	}
])