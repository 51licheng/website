System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BuyPageButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BuyPageButton = (function () {
                function BuyPageButton() {
                    this.content1 = "填写订单信息";
                    this.content2 = "前往支付链接";
                }
                BuyPageButton.prototype.goPage = function () {
                    window.location.href = 'http://www.google.com/';
                };
                BuyPageButton = __decorate([
                    core_1.Component({
                        selector: 'buy-page-button',
                        template: "\n  <div class=\"container\">\n    <button (click)=\"goPage()\" type=\"button\" class=\"btn btn-info btn-sm\">{{content1}}</button>\n    <button (click)=\"goPage()\" type=\"button\" class=\"btn btn-danger btn-sm\">{{content2}}</button>\n  </div>\n  ",
                        styles: ['div { float: right; width: 100px; }']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BuyPageButton);
                return BuyPageButton;
            }());
            exports_1("BuyPageButton", BuyPageButton);
        }
    }
});
//# sourceMappingURL=buy_page_button.component.js.map