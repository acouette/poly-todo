import json

from flask import Flask
from flask import Response
from flask import jsonify
from flask import request
from flask.ext.cors import CORS

from org.todo.repository import Repository

app = Flask(__name__)
CORS(app)

repository = Repository()


@app.route('/todos', methods=['GET'])
def get_todos():
    return json.dumps(repository.find_all())


@app.route('/todos/<string:todo_id>', methods=['GET'])
def get_todo(todo_id):
    todo = repository.find_by_id(todo_id)
    if todo is None:
        return Response(status=404)
    return jsonify(todo)


@app.route('/todos', methods=['POST'])
def add_todo():
    new_todo = request.json
    new_todo['done'] = False
    return repository.insert(new_todo)


@app.route('/todos/<string:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    todo = repository.find_by_id(todo_id)
    if todo is None:
        return Response(status=404)
    repository.remove_by_id(todo_id)
    return Response(status=200)


@app.route('/todos/<string:todo_id>', methods=['PUT'])
def update_todo(todo_id):
    repository.update(todo_id, request.json)
    return Response(status=202)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
