import {Todo} from './todo.model';
import {Http, RequestOptionsArgs, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService {

    private todoUrl:string = 'http://localhost:5000/todos';
    private requestOpt:any = {headers: new Headers({'Content-Type': 'application/json'})};


    constructor(private http:Http) {

    }


    getTodos() {
        return this.http.get(this.todoUrl).map(res => {
            return JSON.parse(res.text());
        });
    }


    addTodo(todo:Todo) {
        return this.http.post(this.todoUrl, JSON.stringify(todo), this.requestOpt);
    }

    updateTodo(todo:Todo){
        return this.http.put(this.todoUrl+'/'+todo._id, JSON.stringify(todo), this.requestOpt);
    }
}


