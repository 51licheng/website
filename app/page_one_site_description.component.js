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
    var SiteDescription;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SiteDescription = (function () {
                function SiteDescription() {
                    this.title = "我爱里程网, 最安全最方便极优惠的里程提供商";
                    this.content = "免票直通网所经营的里程来源于美国个人，经过严格审核，"
                        + "有真实姓名地址，无盗卡和团体卡。里程未经过他人之手，业界最安全；"
                        + " 崇尚合作意识，各种情况的处理尽量事先说明，承诺的就能做到。"
                        + "买家可以在网站直接查库存，直接下单，直接操作，不需要人工查询。"
                        + "请在下面价格表中选择对应的里程和购买方式后点击“购买” 开始。";
                }
                SiteDescription = __decorate([
                    core_1.Component({
                        selector: 'page-one-site-description',
                        template: "\n    <div class=\"container\">\n      <h3>{{title}}</h3>\n      <p>{{content}}</p>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SiteDescription);
                return SiteDescription;
            }());
            exports_1("SiteDescription", SiteDescription);
        }
    }
});
//# sourceMappingURL=page_one_site_description.component.js.map