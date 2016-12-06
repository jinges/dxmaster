.controller('channelCtrl', ['$scope', '$rootScope', '$stateParams', '$location', '$timeout', '$state',  'common', 'paths', 
	function ($scope, $rootScope, $stateParams, $location, $timeout, $state, common, paths) {
		var obj = {};

		$scope.channel = function () {
			common.get(paths.channel, {})
				.then(function(data){
					$scope.channels = data.list;
				})
		};

		$scope.save = function (){
			var params = {
				name: $scope.name,
				linkman: $scope.linkman,
				phone: $scope.phone
			}
			common.post(paths.editChannel, params)
				.then(function (data) {
					if(!data){
						return false;
					}
					$state.go('channel');
				})
		}

		$scope.watchqr = function(i){
			$scope['show'+i] = true;
		}

		$scope.closeqr = function(i){
			$scope['show'+i] = false;
		}
	}
])