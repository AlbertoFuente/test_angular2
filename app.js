var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var MyAppComponent = (function () {
    function MyAppComponent(friendsService) {
        this.myName = 'Alberto';
        this.names = friendsService.names;
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'display',
            injectables: [FriendsService]
        }),
        angular2_1.View({
            template: "\n        <p>My name: {{ myName }}</p>\n        <p>Friends:</p>\n        <ul>\n          <li *for=\"#name of names\">\n            {{ name }}\n          </li>\n        </ul>\n        <p *if=\"names.length > 3\">You have many friends!</p>\n      ",
            directives: [angular2_1.For, angular2_1.If]
        })
    ], MyAppComponent);
    return MyAppComponent;
})();
var FriendsService = (function () {
    function FriendsService() {
        this.names = ["Aarav", "Martín", "Shannon"];
    }
    return FriendsService;
})();
angular2_1.bootstrap(MyAppComponent);
