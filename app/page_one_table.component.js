System.register(['angular2/core'], function(exports_1, context_1) {
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
    var Table;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Table = (function () {
                function Table() {
                    this.title = "价格表（每百分） VIP客户登录可查看优惠价格";
                    this.description = "(如果购买航空里程数量小于一万三千分，每订单额外收取12美元小额费用)";
                    this.column1 = "里程种类";
                    this.column2 = "代订机票（不含税费）";
                    this.column3 = "充值";
                    this.column4 = "酒店种类";
                    this.column5 = "代订酒店（不含税费）";
                }
                Table = __decorate([
                    core_1.Component({
                        selector: 'page-one-table',
                        template: "\n      <div class='container col-sm-12'>\n        <div class=\"title-container\">\n          <h4>{{title}}</h4>\n          <p>{{description}}</p>\n        </div>\n        <div class=\"table-responsive\">\n        <table class=\"table table-hover table-bordered\">\n          <thead>\n            <tr>\n              <th>{{column1}}</th>\n              <th>{{column2}}</th>\n              <th>{{column3}}</th>\n            </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>AAdvantage Miles AA \u7F8E\u56FD\u822A\u7A7A (\u4E00\u5343\u5206)</td>\n            <td>1150&nbsp;&nbsp;&nbsp;<a href=\"buy.html\"><button type=\"button\" class=\"btn btn-info btn-sm\">\u8D2D\u4E70</button></a></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>ANA Mileage NH \u5168\u65E5\u7A7A (\u4E00\u5343\u5206)</td>\n            <td>1150&nbsp;&nbsp;&nbsp;<a href=\"buy.html\"><button type=\"button\" class=\"btn btn-info btn-sm\">\u8D2D\u4E70</button></a></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>Delta Skymiles DL \u8FBE\u7F8E (\u4E00\u5343\u5206)</td>\n            <td>1150&nbsp;&nbsp;&nbsp;<a href=\"buy.html\"><button type=\"button\" class=\"btn btn-info btn-sm\">\u8D2D\u4E70</button></a></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>United MileagePlus UA \u7F8E\u8054\u822A (\u4E00\u5343\u5206)</td>\n            <td>1150&nbsp;&nbsp;&nbsp;<a href=\"buy.html\"><button type=\"button\" class=\"btn btn-info btn-sm\">\u8D2D\u4E70</button></a></td>\n            <td></td>\n          </tr>\n          <tr>\n            <td>Cathay Pacific Airways CX \u4E9A\u4E07 \u4E07\u91CC\u901A (\u4E00\u5343\u5206)</td>\n            <td>1150&nbsp;&nbsp;&nbsp;<a href=\"buy.html\"><button type=\"button\" class=\"btn btn-info btn-sm\">\u8D2D\u4E70</button></a></td>\n            <td></td>\n          </tr>\n        </table>\n        </div>\n\n        <div class=\"table-responsive\">\n        <table class=\"table table-hover table-bordered\">\n          <thead>\n            <tr>\n              <th>{{column4}}</th>\n              <th>{{column5}}</th>\n              <th>{{column3}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Marriott&nbsp;\u4E07\u8C6A&nbsp;7&nbsp;free&nbsp;night</td>\n              <td>3500&nbsp;&nbsp;&nbsp;<a href=\"buy.html\"><button type=\"button\" class=\"btn btn-info btn-sm\">\u8D2D\u4E70</button></a></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>Marriott&nbsp;\u4E07\u8C6A&nbsp;1&nbsp;free&nbsp;night</td>\n              <td>&nbsp;&nbsp;700&nbsp;&nbsp;&nbsp;<a href=\"buy.html\"><button type=\"button\" class=\"btn btn-info btn-sm\">\u8D2D\u4E70</button></a></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>Hyatt&nbsp;\u51EF\u60A6&nbsp;1&nbsp;free&nbsp;night</td>\n              <td>2070&nbsp;&nbsp;&nbsp;<a href=\"buy.html\"><button type=\"button\" class=\"btn btn-info btn-sm\">\u8D2D\u4E70</button></a></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>Hyatt&nbsp;\u51EF\u60A6&nbsp;1&nbsp;free&nbsp;night</td>\n              <td>1500&nbsp;&nbsp;&nbsp;<a href=\"buy.html\"><button type=\"button\" class=\"btn btn-info btn-sm\">\u8D2D\u4E70</button></a></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td>Hilton&nbsp;\u5E0C\u5C14\u987F&nbsp;7&nbsp;free&nbsp;night</td>\n              <td>2000&nbsp;&nbsp;&nbsp;<a href=\"buy.html\"><button type=\"button\" class=\"btn btn-info btn-sm\">\u8D2D\u4E70</button></a></td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n        <div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Table);
                return Table;
            }());
            exports_1("Table", Table);
        }
    }
});
//# sourceMappingURL=page_one_table.component.js.map