.controller('sporderCtrl', ['$scope', '$rootScope', '$stateParams', '$location', '$timeout', '$state',  'common', 'paths', 
	function ($scope, $rootScope, $stateParams, $location, $timeout, $state, common, paths) {

		$scope.page = 1;
		var params = {
			pageSize: 10,
			page: 1
		};

		$scope.ordersData = function () {
			getOrders(params);
		};

		$scope.getPage = function(i){
			$scope.page = i;
			params.page = i;
			getOrders(params);
		}

		$scope.pageMove = function(i){
			if(i && (params.page < $scope.pageCount)) {
				params.page ++;
			} else if(!i && (params.page > 1)) {
				params.page --;
			}

			$scope.page = params.page;
			getOrders(params);
		}

		function getOrders(params){
			common.get(paths.spOrders, params)
				.then(function(data){
					$scope.list = data.list;
					$scope.pageCount = data.pageCount;
				})
		}

		$scope.order = function () {
			var orderId = $stateParams.orderId;

			common.get(paths.spOrder, {orderId: orderId})
				.then(function (data) {
					$scope.order = data.list[0];
				})
		};
	}
])