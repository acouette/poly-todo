from pymongo import MongoClient


class Repository:
    def __init__(self):
        client = MongoClient()
        db = client.todo_db
        self.todos = db.todos

    def find_all(self):
        return self.todos.find()

    def find_by_id(self, todo_id):
        return self.todos.find_one({'id': todo_id})

    def insert(self, todo):
        return self.todos.insert_one(todo)

    def update(self, todo):
        self.remove_by_id(todo.id)
        self.insert(todo)

    def remove_by_id(self, id):
        self.todos.remove({'id': id})


