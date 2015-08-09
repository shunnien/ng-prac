(function() {
    angular.module('app')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl(version, $cookies) {
        var vm = this;
        vm.last_url = $cookies.get('last_url');
        //vm.IsDebug = false;
        vm.version = version;
        
        var counter = 1;
        vm.debug = function(counter) {
            console.log(counter++);
        }

        vm.PName = 'T-Shirt (Female)';
        vm.Price = 200;
        vm.Qty = 5;

        vm.subtotal = function(Price, Qty) {
            var result = Price * Qty;
            if (Qty > 9) result = result * 0.9;
            return result;
        };

        vm.carts = [];

        vm.carts.push({
            'PName': 'T-shirt (Male) - M',
            'Price': 200,
            'Qty': 10
        });

        vm.carts.push({
            'PName': 'T-shirt (Male) - L',
            'Price': 200,
            'Qty': 2
        });

        vm.carts.push({
            'PName': 'Coat - L',
            'Price': 1200,
            'Qty': 1
        });

        vm.carts.push({
            'PName': 'Eye glasses',
            'Price': 1999,
            'Qty': 3
        });

        vm.add = function() {
            vm.carts.push({
                'PName': vm.PName,
                'Price': vm.Price,
                'Qty': vm.Qty
            });
        };

        vm.sum = function() {
            var result = 0;
            for (var i in vm.carts) {
                result += vm.subtotal(vm.carts[i].Price, vm.carts[i].Qty);
            }
            return result;
        };

        vm.del = function(item) {
            var idx;
            for (var i in vm.carts) {
                if (item == vm.carts[i]) {
                    idx = i;
                }
            }
            vm.carts.splice(idx, 1);
        };

        vm.BatchDel = function() {
            var newcarts = [];
            for (var i in vm.carts) {
                if (!vm.carts[i].ToBeDeleted) {
                    newcarts.push(vm.carts[i]);
                }
            }
            vm.carts = newcarts;
        };

        vm.SelectAll = function() {
            for (var i in vm.carts) {
                vm.carts[i].ToBeDeleted = vm.IsSelectAll;
            }
        };

        vm.edit = function(item) {
            item.Qty2 = item.Qty;
            item.IsEdit = true;
        };
        vm.editDone = function(item) {
            item.Qty = item.Qty2;
            delete item.Qty2;
            delete item.IsEdit;
        };
        vm.editCancel = function(item) {
            delete item.Qty2;
            delete item.IsEdit;
        };
    }
})();
