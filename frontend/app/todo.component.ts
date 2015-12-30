import {Component, OnInit} from 'angular2/core';
import {TodoService} from './todo.service'
import {Todo} from './todo.model'

@Component({
    selector: 'my-app',
    template: `<div class="todo-wrapper">
                    <h1 class="todo-title">Todo app</h1>
                    <input class="todo-input" #newTodoTitle type="text" placeholder="What to do ?" (keyup.enter)="newTodo(newTodoTitle.value)">
                    <div>
                        <ul>
                            <li *ngFor="#todo of todos">
                                {{todo.title}}
                                <input type="button" (click)="toggleDone(todo)">{{todo.done?"undone":"done"}}
                            </li>
                        </ul>
                    </div>
                </div>
    `,
    providers: [TodoService]
})

export class AppComponent implements OnInit {

    constructor(private todoService:TodoService) {
    }

    public todos:Todo[] = [];

    ngOnInit() {
        this.fetchTodos();
    }

    private fetchTodos() {
        this.todoService.getTodos().subscribe(todos => this.todos = todos);
    };

    newTodo(newTodoTitle:string) {
        var newTodo = {title: newTodoTitle};
        this.todoService.addTodo(newTodo).subscribe(res => this.fetchTodos());
    }

    toggleDone(todo:Todo){
        todo.done = !todo.done;
        this.todoService.updateTodo(todo);
    }

}

