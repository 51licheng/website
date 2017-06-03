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
    var SlideWindow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SlideWindow = (function () {
                function SlideWindow() {
                }
                SlideWindow = __decorate([
                    core_1.Component({
                        selector: 'page-one-slide-window',
                        //template property holds component's companion template that tells Angular how to render a view
                        template: "\n    <div class=\"container\">\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\">\n    <div class=\"item active\">\n      <img src=\"/img/pic1.jpg\" alt=\"Los Angeles\" style=\"width:100%;\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"/img/pic2.jpg\" alt=\"Chicago\" style=\"width:100%;\">\n    </div>\n\n    <div class=\"item\">\n      <img src=\"/img/pic3.jpeg\" alt=\"New york\" style=\"width:100%;\">\n    </div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SlideWindow);
                return SlideWindow;
            }());
            exports_1("SlideWindow", SlideWindow);
        }
    }
});
//# sourceMappingURL=page_one_slide_window.component.js.map