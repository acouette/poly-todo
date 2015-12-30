System.register(['angular2/platform/browser', 'angular2/http', './todo.component', 'rxjs/add/operator/map'], function(exports_1) {
    var browser_1, http_1, todo_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(todo_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map