.controller('rebateCtrl', ['$scope', '$rootScope', '$stateParams', '$location', '$timeout', '$state',  'common', 'paths', 
	function ($scope, $rootScope, $stateParams, $location, $timeout, $state, common, paths) {
		var obj = {flag: 'P'};
		$scope.page = 1;
		var params = {
			pageSize: 10,
			page: 1,
			rebate: 'rebate'
		};

		$scope.rebateData = function () {
			getRebateList(params);

		};


		$scope.pageMove = function(i){
			if(i && (params.page < $scope.pageCount)) {
				params.page ++;
			} else if(!i && (params.page > 1)) {
				params.page --;
			}

			$scope.page = params.page;
			getRebateList(params);
		}

		$scope.getPage = function(i){
			$scope.page = i;
			params.page = i;
			getRebateList(params);
		}

		function getRebateList(params){
			common.get(paths.order, params)
				.then(function(data){
					$scope.list = data.list;
					$scope.pageCount = data.pageCount;
				})
		}


		$scope.withdrawal = function(){
			getWithdrawal();
		}

		$scope.withdrawals = function(id, status){
			if(status){
				return false;
			}
			common.get(paths.withdrawal, {id: id})
				.then(function(data){
					getWithdrawal();
				})
		}

		function getWithdrawal(){
			common.get(paths.withdrawalList, {})
				.then(function(data){
					$scope.list = data.list;
				})
		}

	}
])