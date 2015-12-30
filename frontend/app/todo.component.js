System.register(['angular2/core', './todo.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(todoService) {
                    this.todoService = todoService;
                    this.todos = [];
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.fetchTodos();
                };
                AppComponent.prototype.fetchTodos = function () {
                    var _this = this;
                    this.todoService.getTodos().subscribe(function (todos) { return _this.todos = todos; });
                };
                ;
                AppComponent.prototype.newTodo = function (newTodoTitle) {
                    var _this = this;
                    var newTodo = { title: newTodoTitle };
                    this.todoService.addTodo(newTodo).subscribe(function (res) { return _this.fetchTodos(); });
                };
                AppComponent.prototype.toggleDone = function (todo) {
                    todo.done = !todo.done;
                    this.todoService.updateTodo(todo);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<div class=\"todo-wrapper\">\n                    <h1 class=\"todo-title\">Todo app</h1>\n                    <input class=\"todo-input\" #newTodoTitle type=\"text\" placeholder=\"What to do ?\" (keyup.enter)=\"newTodo(newTodoTitle.value)\">\n                    <div>\n                        <ul>\n                            <li *ngFor=\"#todo of todos\">\n                                {{todo.title}}\n                                <input type=\"button\" (click)=\"toggleDone(todo)\">{{todo.done?\"undone\":\"done\"}}\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n    ",
                        providers: [todo_service_1.TodoService]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map