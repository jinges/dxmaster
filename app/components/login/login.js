.controller('loginCtrl', ['$scope', '$cookieStore', '$state', '$stateParams', 'common', 'paths',
	function($scope, $cookieStore, $state, $stateParams, common, paths){
		$scope.login = function () { 
			var formData = {
				userName: $scope.username,
				password: $scope.password
			};

			common.post(paths.login,formData).then(function (data) {
				$cookieStore.put('user', data.list[0]);
				$state.go('orders');
			});
		}
	}
])