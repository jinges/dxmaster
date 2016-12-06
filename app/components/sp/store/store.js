.controller('spstoreCtrl', ['$scope', '$cookieStore', '$state', '$stateParams', 'common', 'paths',
	function($scope, $cookieStore, $state, $stateParams, common, paths){
		$scope.stores = function () { 
			common.get(paths.spstore, {})
				.then(function(data){
					$scope.storeList = data.list;
				})
		}
	}
])