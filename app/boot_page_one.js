System.register(["angular2/platform/browser", "./page_one.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, page_one_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (page_one_component_1_1) {
                page_one_component_1 = page_one_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(page_one_component_1.PageOne);
        }
    }
});
//# sourceMappingURL=boot_page_one.js.map