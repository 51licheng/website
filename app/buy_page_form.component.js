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
    var BuyPageForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BuyPageForm = (function () {
                function BuyPageForm() {
                    this.title = "我要购买";
                    this.content1 = "填写订单信息";
                    this.content2 = "前往支付链接";
                }
                BuyPageForm.prototype.goPage1 = function () {
                    window.location.href = 'http://www.google.com/';
                };
                BuyPageForm.prototype.goPage2 = function () {
                    window.location.href = "https://item.taobao.com/item.htm?id=552380615049";
                };
                BuyPageForm = __decorate([
                    core_1.Component({
                        selector: 'buy-page-form',
                        template: "\n  <div class=\"container\">\n    <form class=\"form-horizontal\">\n      <fieldset>\n        <input type=\"hidden\" name=\"form\" value=\"pickmiles\">\n          <div class=\"form-group\">\n              <label class=\"col-sm-2 control-label\" for=\"pickmiles-element-2\">\n                <span class=\"required\">* </span>\n                  \u9009\u62E9\u8D2D\u4E70\u65B9\u5F0F\n              </label>\n              <div class=\"col-sm-10\">\n                <select class=\"form-control\" name=\"boption\" required=\"\">\n                  <option value=\"BK\" selected=\"selected\">\u4EE3\u8BA2\u673A\u7968/\u9152\u5E97</option>\n                  <option value=\"CZ\">\u5145\u503C</option>\n                </select>\n              </div>\n            </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">\n              <span class=\"required\">* </span>\n              \u91CC\u7A0B\u79CD\u7C7B\n              </label>\n            <div class=\"col-sm-10\">\n              <select class=\"form-control\" name=\"product_id\" required=\"\">\n                <option value=\"57\">AAdvantage Miles AA \u7F8E\u56FD\u822A\u7A7A (\u4E00\u5343\u5206)</option>\n                <option value=\"67\">ANA Mileage NH \u5168\u65E5\u7A7A (\u4E00\u5343\u5206)</option>\n                <option value=\"58\">Delta Skymiles DL \u8FBE\u7F8E (\u4E00\u5343\u5206)</option>\n                <option value=\"59\">United MileagePlus UA \u7F8E\u8054\u822A (\u4E00\u5343\u5206)</option>\n                <option value=\"60\">Cathay Pacific Airways CX \u4E9A\u4E07 \u4E07\u91CC\u901A (\u4E00\u5343\u5206)</option>\n                <option value=\"64\">Marriott&nbsp;\u4E07\u8C6A&nbsp;7&nbsp;free&nbsp;night</option>\n                <option value=\"53\">Marriott&nbsp;\u4E07\u8C6A&nbsp;1&nbsp;free&nbsp;night</option>\n                <option value=\"50\">Hyatt&nbsp;\u51EF\u60A6&nbsp;1&nbsp;free&nbsp;night&nbsp;type1</option>\n                <option value=\"69\">Hyatt&nbsp;\u51EF\u60A6&nbsp;1&nbsp;free&nbsp;night&nbsp;type2</option>\n                <option value=\"73\">Hilton&nbsp;\u5E0C\u5C14\u987F&nbsp;7&nbsp;free&nbsp;night</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-sm-2 control-label\" for=\"pickmiles-element-4\">\n                <span class=\"required\">* </span>\n                \u6570\u91CF\n              </label>\n            <div class=\"col-sm-10\">\n              <input type=\"number\" class=\"form-control\" name=\"quantity\" required=\"\" value=\"35\">\n              <span class=\"help-block\">extra information</span>\n            </div>\n          </div>\n          </fieldset>\n          </form>\n          <div class=\"container\">\n            <button (click)=\"goPage1()\" type=\"button\" class=\"btn btn-info btn-sm\">{{content1}}</button>\n            <button (click)=\"goPage2()\" type=\"button\" class=\"btn btn-danger btn-sm\">{{content2}}</button>\n          </div>\n  </div>\n  ",
                        styles: ['button { margin: 10 10 10 10; }']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BuyPageForm);
                return BuyPageForm;
            }());
            exports_1("BuyPageForm", BuyPageForm);
        }
    }
});
//# sourceMappingURL=buy_page_form.component.js.map