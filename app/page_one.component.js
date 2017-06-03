System.register(['angular2/core', './page_one_header.component', './page_one_slide_window.component', './page_one_site_description.component', './page_one_table.component'], function(exports_1, context_1) {
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
    var core_1, page_one_header_component_1, page_one_slide_window_component_1, page_one_site_description_component_1, page_one_table_component_1;
    var PageOne;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (page_one_header_component_1_1) {
                page_one_header_component_1 = page_one_header_component_1_1;
            },
            function (page_one_slide_window_component_1_1) {
                page_one_slide_window_component_1 = page_one_slide_window_component_1_1;
            },
            function (page_one_site_description_component_1_1) {
                page_one_site_description_component_1 = page_one_site_description_component_1_1;
            },
            function (page_one_table_component_1_1) {
                page_one_table_component_1 = page_one_table_component_1_1;
            }],
        execute: function() {
            PageOne = (function () {
                function PageOne() {
                }
                PageOne = __decorate([
                    core_1.Component({
                        selector: 'page-one',
                        template: "\n    <page-one-header></page-one-header>\n    <page-one-slide-window></page-one-slide-window>\n    <page-one-site-description></page-one-site-description>\n    <page-one-table></page-one-table>\n  ",
                        directives: [page_one_header_component_1.HeaderPageOne, page_one_slide_window_component_1.SlideWindow, page_one_site_description_component_1.SiteDescription, page_one_table_component_1.Table]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PageOne);
                return PageOne;
            }());
            exports_1("PageOne", PageOne);
        }
    }
});
//# sourceMappingURL=page_one.component.js.map