"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Ultra Racing';
        this.carParts = [
            {
                "id": 1,
                "name": "Super Tires",
                "description": "These tires are the very best",
                "inStock": 0,
                "price": 4.99
            },
            {
                "id": 2,
                "name": "Super * 2 Tires",
                "description": "22 is double the amount of 11",
                "inStock": 0,
                "price": 12.99
            },
            {
                "id": 3,
                "name": "3 * Super Tires",
                "description": "Three people walking around has my teacher",
                "inStock": 0,
                "price": 2.99
            }
        ];
    }
    AppComponent.prototype.totalCarParts = function () {
        var sum = 0;
        for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
            var carPart = _a[_i];
            sum += carPart.inStock;
        }
        return sum;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n    <p *ngIf=\"totalCarParts() > 0\">There are {{totalCarParts()}} total parts in stock.</p>\n    <p *ngIf=\"totalCarParts() === 0\">It is out of stock in stock.</p>\n\n    <ul *ngFor=\"let carPart of carParts\">\n        <li>\n            <h2>{{carPart.name | uppercase}}</h2>\n            <p>{{carPart.description}}</p>\n            <p>{{carPart.price | currency:'CAD':true}}\n            <p *ngIf=\"carPart.inStock > 0\">{{carPart.inStock}} in Stock</p>\n            <p *ngIf=\"carPart.inStock === 0\">Out of stock</p>\n        </li>\n    </ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map