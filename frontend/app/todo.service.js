System.register(['angular2/http', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var TodoService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoService = (function () {
                function TodoService(http) {
                    this.http = http;
                    this.todoUrl = 'http://localhost:5000/todos';
                    this.requestOpt = { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) };
                }
                TodoService.prototype.getTodos = function () {
                    return this.http.get(this.todoUrl).map(function (res) {
                        return JSON.parse(res.text());
                    });
                };
                TodoService.prototype.addTodo = function (todo) {
                    return this.http.post(this.todoUrl, JSON.stringify(todo), this.requestOpt);
                };
                TodoService.prototype.updateTodo = function (todo) {
                    return this.http.put(this.todoUrl + '/' + todo._id, JSON.stringify(todo), this.requestOpt);
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TodoService);
                return TodoService;
            })();
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=todo.service.js.map