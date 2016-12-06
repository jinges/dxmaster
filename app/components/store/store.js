.controller('storeCtrl', ['$scope', '$cookieStore', '$state', '$stateParams', 'common', 'paths',
	function($scope, $cookieStore, $state, $stateParams, common, paths){
		var sid = 0;
		var id = 0;
		$scope.stores = function () { 
			sid = $stateParams.sid;
			$scope.sid = sid;
			getStore(sid);
		};

		function getStore(sid){
			common.get(paths.store, {sid: sid})
				.then(function(data){
					$scope.storeList = data.list;
				})
		}

		$scope.store = function(){
			id = $stateParams.id;
			sid = $stateParams.sid;
			$scope.sid = sid;

			getStoreInf(id)
			getCity();
			getArea();


		};

		$scope.eidtState = function(id, status){
			var params = {
				id: id,
				status: status?0:1
			}
			common.get( paths.updateStoreStatus, params)
				.then(function(data){
					getStore(sid)
				})
		};

		function getStoreInf(id){
			common.get(paths.storeinf, {id: id})
				.then(function(data){
					console.log(data.list[0]);
					$scope.store = data.list[0];
					console.log($scope.store);
				})
		}

		function getCity(){
			common.get(paths.city, {})
				.then(function(data){
					$scope.cities = data.list;
				})
		}

		function getArea(){
			common.get(paths.area, {})
				.then(function(data){
					$scope.areas = data.list;
				})
		}

		$scope.save = function () {
			// var params = {
			// 	sid: sid,
			// 	name: $scope.name,
			// 	city: $scope.city,
			// 	area: $scope.area,
			// 	address: $scope.address,
			// 	opentime: $scope.opentime,
			// 	linkman: $scope.linkman,
			// 	min: $scope.min,
			// 	max: $scope.max,
			// 	phone: $scope.phone,
			// 	ahead: $scope.ahead
			// };

			var params = $scope.store;
			if(!id) {
				params.sid = sid;
			}

			if(params.min * 1 >= params.max * 1) {
				alert('限制金额不正确');
				return false;
			}

			common.post(paths.editStore, params)
				.then(function(data){
					if(!data){
						return false;
					}
					$state.go('store', {sid: sid});
				})

		}
	}
])