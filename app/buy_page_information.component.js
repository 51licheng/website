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
    var BuyPageInformation;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BuyPageInformation = (function () {
                function BuyPageInformation() {
                    this.title = "库存信息";
                    this.column1 = "里程种类";
                    this.column2 = "里程数（W）";
                    this.column3 = "个权";
                    this.column4 = "酒店种类";
                    this.column5 = "个数";
                }
                BuyPageInformation = __decorate([
                    core_1.Component({
                        selector: 'buy-page-information',
                        template: "\n  <div class=\"header-container\">\n    <h2>{{title}}</h2>\n    <h3>\u91CC\u7A0B\uFF1A</h3>\n    <div class=\"table-responsive\">\n    <table class=\"table table-hover table-bordered\">\n      <thead>\n        <tr>\n          <th>{{column1}}</th>\n          <th>{{column2}}</th>\n          <th>{{column3}}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>AAdvantage Miles AA \u7F8E\u56FD\u822A\u7A7A</td>\n          <td>8</td>\n          <td>2</td>\n        </tr>\n        <tr>\n          <td>AAdvantage Miles AA \u7F8E\u56FD\u822A\u7A7A</td>\n          <td>10</td>\n          <td>4</td>\n        </tr>\n        <tr>\n          <td>AAdvantage Miles AA \u7F8E\u56FD\u822A\u7A7A</td>\n          <td>15</td>\n          <td>3</td>\n        </tr>\n        <tr>\n          <td>ANA Mileage NH \u5168\u65E5\u7A7A</td>\n          <td>8</td>\n          <td>2</td>\n        </tr>\n        <tr>\n          <td>ANA Mileage NH \u5168\u65E5\u7A7A</td>\n          <td>10</td>\n          <td>4</td>\n        </tr>\n        <tr>\n          <td>Delta Skymiles DL \u8FBE\u7F8E</td>\n          <td>15</td>\n          <td>3</td>\n        </tr>\n        <tr>\n          <td>Delta Skymiles DL \u8FBE\u7F8E</td>\n          <td>8</td>\n          <td>2</td>\n        </tr>\n        <tr>\n          <td>United MileagePlus UA \u7F8E\u8054\u822A</td>\n          <td>10</td>\n          <td>4</td>\n        </tr>\n        <tr>\n          <td>United MileagePlus UA \u7F8E\u8054\u822A</td>\n          <td>15</td>\n          <td>3</td>\n        </tr>\n        <tr>\n          <td>United MileagePlus UA \u7F8E\u8054\u822A</td>\n          <td>8</td>\n          <td>2</td>\n        </tr>\n        <tr>\n          <td>Cathay Pacific Airways CX \u4E9A\u4E07 \u4E07\u91CC\u901A</td>\n          <td>10</td>\n          <td>4</td>\n        </tr>\n        <tr>\n          <td>Cathay Pacific Airways CX \u4E9A\u4E07 \u4E07\u91CC\u901A</td>\n          <td>15</td>\n          <td>3</td>\n        </tr>\n      </tbody>\n    </table>\n    <div>\n    <h3>\u9152\u5E97\uFF1A</h3>\n    <div class=\"table-responsive\">\n    <table class=\"table table-hover table-bordered\">\n      <thead>\n        <tr>\n          <th>{{column4}}</th>\n          <th>{{column5}}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Marriott&nbsp;\u4E07\u8C6A&nbsp;7&nbsp;free&nbsp;night</td>\n          <td>35</td>\n        </tr>\n        <tr>\n          <td>Marriott&nbsp;\u4E07\u8C6A&nbsp;1&nbsp;free&nbsp;night</td>\n          <td>7</td>\n        </tr>\n        <tr>\n          <td>Hyatt&nbsp;\u51EF\u60A6&nbsp;1&nbsp;free&nbsp;night</td>\n          <td>2</td>\n        </tr>\n        <tr>\n          <td>Hyatt&nbsp;\u51EF\u60A6&nbsp;1&nbsp;free&nbsp;night</td>\n          <td>15</td>\n        </tr>\n        <tr>\n          <td>Hilton&nbsp;\u5E0C\u5C14\u987F&nbsp;7&nbsp;free&nbsp;night</td>\n          <td>2</td>\n        </tr>\n      </tbody>\n    </table>\n    <div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BuyPageInformation);
                return BuyPageInformation;
            }());
            exports_1("BuyPageInformation", BuyPageInformation);
        }
    }
});
//# sourceMappingURL=buy_page_information.component.js.map