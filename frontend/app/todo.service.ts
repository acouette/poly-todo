import {Todo} from './todo.model';
import {Http, RequestOptionsArgs, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService {

    constructor(public http:Http) {

    }

    getTodos() {
        return this.http.get('http://localhost:5000/todos').map(res => {
            return JSON.parse(res.text());
        });
    }


    addTodo(todo:Todo) {

        var requestOpt = {headers: new Headers({'Content-Type': 'application/json'})};
        return this.http.post('http://localhost:5000/todos', JSON.stringify(todo), requestOpt);
    }
}

class RequestArgs implements RequestOptionsArgs {


    constructor(headers:Headers) {
        this.headers = headers;
    }

    headers:Headers;
}


