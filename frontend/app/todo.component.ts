import {Component, OnInit} from 'angular2/core';
import {TodoService} from './todo.service'
import {Todo} from './todo.model'

@Component({
    selector: 'my-app',
    template: ` <h1>My First Angular 2 App</h1>
                <div><input #newTodoTitle type="text" placeholder="What to do ?" (keyup.enter)="newTodo(newTodoTitle.value)"></div>
                <div>
                    <ul><li *ngFor="#todo of todos">{{todo.title}}</li></ul>
                </div>
    `,
    providers: [TodoService]
})

export class AppComponent implements OnInit {

    constructor(private _todoService:TodoService) {
    }

    public todos:Todo[] = [];

    ngOnInit() {
        this.fetchTodos();
    }

    private fetchTodos() {
        this._todoService.getTodos().subscribe(todos => this.todos = todos);
    };

    newTodo(newTodoTitle:string) {
        var newTodo = {title: newTodoTitle};
        this._todoService.addTodo(newTodo).subscribe(res => this.fetchTodos());
    }

}

