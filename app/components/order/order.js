.controller('orderCtrl', ['$scope', '$rootScope', '$stateParams', '$location', '$interval', '$state',  'common', 'paths', 
	function ($scope, $rootScope, $stateParams, $location, $interval, $state, common, paths) {
		var obj = {flag: 'P'};
		var flag = true;
		$scope.page = 1;
		var params = {
			pageSize: 10,
			page: 1
		};

		$scope.ordersData = function () {
			getOrders(params);
			getArea();
			getSupplier();

		};

		$scope.order = function () {
			obj.orderId = $stateParams.orderId;

			common.get(paths.editOrder, {orderId: obj.orderId})
				.then(function (data) {
					$scope.order  = data.list[0];
				})
		};

		$scope.pageMove = function(i){
			if(i && (params.page < $scope.pageCount)) {
				params.page ++;
			} else if(!i && (params.page > 1)) {
				params.page --;
			}

			$scope.page = params.page;
			getOrders(params);
		}

		$scope.search = function (){
			params = {
				supplier: $scope.supplier,
				createTime: $scope.searchForm.createTime.$viewValue,
				area: $scope.area,
				buy: $scope.buy,
				sell: $scope.sell,
				status: $scope.status,
				changer: $scope.changer,
				phone: $scope.phone,
				idNo: $scope.idNo
			};

			if(params.buy == '1') {
				params.buy = 'CNY';
			} else if(params.buy == '2'){
				params.buy = params.sell;
				params.sell = 'CNY';
			} else {
				params.buy = '';
			}
			getOrders(params);
		}

		$scope.getPage = function(i){
			$scope.page = i;
			params.page = i;
			getOrders(params);
		}

		$scope.loadVOrders = function () {
			getOrders({})
			var goOn = $interval(function(){
				if(!flag) {
					$interval.cancel(goOn);
				}
				console.log(3)
				getOrders({})
			}, 60000);
		};

		function getOrders(params){
			common.get(paths.order, params)
				.then(function(data){
					$scope.list = data.list;
					$scope.pageCount = data.pageCount;
				})
		}



		function getArea(){
			common.get(paths.area, {})
				.then(function(data){
					$scope.areaList = data.list;
				})
		}

		function getSupplier(){
			common.get( paths.supplier, {})
				.then(function(data){
					$scope.supplierList = data.list;
				})
		}

		$scope.submit = function(id, openId){
			if(!confirm('您确定完成该订单?')){
				return false;
			}
			common.get(paths.vetting, {orderId: id, status: 5, openId: openId})
				.then(function (data) {
					if(!data){
						return false;
					}
					getOrders(params);
				})
		}

	}
])