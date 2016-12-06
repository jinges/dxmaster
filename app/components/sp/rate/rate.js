.controller('rateCtrl', ['$scope', '$rootScope', '$stateParams', '$location', 'FileUploader', '$state',  'common', 'paths', 
	function ($scope, $rootScope, $stateParams, $location, FileUploader, $state, common, paths) {
		var uploader = $scope.uploader = new FileUploader({
            url: paths.upload
        });

        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 1;
            }
        });


        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            if(response.errCode) {
            	alert(response.errMsg);
            	return false;
            }
            alert('上传成功');
            window.location.reload();
        };

        $scope.download = paths.download;

	}
])