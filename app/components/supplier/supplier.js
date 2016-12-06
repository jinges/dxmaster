.controller('supplierCtrl', ['$scope', '$rootScope', '$stateParams', '$location', '$state',  'common', 'paths', 
	function ($scope, $rootScope, $stateParams, $location,  $state, common, paths) {
		var id = 0;
		$scope.loadSupplierList = function(){
			getSupplier()
		};

		function getSupplier(){
			common.get( paths.supplier, {})
				.then(function(data){
					$scope.supplier = data.list;
				})
		}

		$scope.eidtState = function(id, status){
			var params = {
				id: id,
				status: status?0:1
			}
			common.get( paths.updateSupplierStatus, params)
				.then(function(data){
					getSupplier()
				})
		};

		$scope.loadSupplier = function(){
			id = $stateParams.id;
			$scope.supplier = {};
			console.log(id);
			if(id>0){
					$scope.showpass = false;
			} else {
					$scope.showpass = true;
			}
			common.get(paths.supplierinf, {id: id})
				.then(function(data){
					$scope.supplier = data.list[0];
				})
		}

		$scope.save = function () {
			// var obj = {
			// 	'fullname': $scope.fullname,
			// 	'name': $scope.name,
			// 	'account': $scope.account,
			// 	'password': $scope.password
			// 	} 

			var obj = $scope.supplier;
			if(obj.password != obj.repassword) {
				alert('两次密码不一致！');
				return false;
			}

			console.log(id);
			if(id) {
				common.post(paths.editSupplier, JSON.stringify(obj))
					.then(function(data){
					if(!data){
						return false;
					}
						$state.go('supplier');
					})
			} else {
				common.post(paths.addSupplier, JSON.stringify(obj))
					.then(function(data){
					if(!data){
						return false;
					}
						$state.go('supplier');
					})
			}
		}
	}
])