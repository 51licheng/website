System.register(['angular2/core', './buy_page_header.component', './buy_page_form.component', './buy_page_information.component', './buy_page_button.component'], function(exports_1, context_1) {
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
    var core_1, buy_page_header_component_1, buy_page_form_component_1, buy_page_information_component_1, buy_page_button_component_1;
    var BuyPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (buy_page_header_component_1_1) {
                buy_page_header_component_1 = buy_page_header_component_1_1;
            },
            function (buy_page_form_component_1_1) {
                buy_page_form_component_1 = buy_page_form_component_1_1;
            },
            function (buy_page_information_component_1_1) {
                buy_page_information_component_1 = buy_page_information_component_1_1;
            },
            function (buy_page_button_component_1_1) {
                buy_page_button_component_1 = buy_page_button_component_1_1;
            }],
        execute: function() {
            BuyPage = (function () {
                function BuyPage() {
                }
                BuyPage = __decorate([
                    core_1.Component({
                        selector: 'buy-page',
                        template: "\n    <buy-page-header></buy-page-header>\n    <buy-page-form></buy-page-form>\n    <buy-page-information></buy-page-information>\n  ",
                        directives: [buy_page_header_component_1.BuyPageHeader, buy_page_form_component_1.BuyPageForm, buy_page_information_component_1.BuyPageInformation, buy_page_button_component_1.BuyPageButton]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BuyPage);
                return BuyPage;
            }());
            exports_1("BuyPage", BuyPage);
        }
    }
});
//# sourceMappingURL=buy_page.component.js.map