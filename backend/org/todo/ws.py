import json
from flask import Flask
from flask import jsonify
from flask import request
from uuid import uuid4
from flask import Response
from org.todo.repository import Repository

app = Flask(__name__)

repository = Repository()


@app.route("/todos", methods=['GET'])
def get_todos():
    return json.dumps(repository.find_all())


@app.route("/todos/<string:todo_id>", methods=['GET'])
def get_todo(todo_id):
    todo = repository.find_by_id(todo_id)
    if todo is None:
        return Response(status=404)
    return jsonify(todo)


@app.route("/todos", methods=['POST'])
def add_todo():
    new_todo = request.json
    new_todo['id'] = str(uuid4())
    new_todo['done'] = False
    repository.insert(new_todo)
    return new_todo['id']


@app.route("/todos/<string:todo_id>", methods=['DELETE'])
def delete_todo(todo_id):
    todo = repository.find_by_id(todo_id)
    if todo is None:
        return Response(status=404)
    repository.remove_by_id(todo_id)
    return Response(status=200)


@app.route("/todos/<string:todo_id>", methods=['PUT'])
def update_todo(todo_id):
    repository.update(request.json)
    return Response(status=202)


if __name__ == '__main__':
    app.run(debug=True)
