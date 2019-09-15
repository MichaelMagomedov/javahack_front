angular.module('app').controller('ItemController', ['$http', '$scope', '$timeout', '$stateParams', '$state',
    function ($http, $scope, $timeout, $stateParams, $state) {

        $scope.item = $stateParams.item;
        if (!$scope.item) {
            $state.go('app.list')
        }
        $scope.ob = $scope.item.lotItems[0].firstPrice * 0.1;
        $scope.cred = $scope.item.lotItems[0].firstPrice;
        console.log($scope.item);
        $scope.moment = moment;
        $scope.accept = function () {
            sweetAlert({
                icon: "success",
            }).then(function () {
                $state.go('app.list')
            });
        }
    }
]);
