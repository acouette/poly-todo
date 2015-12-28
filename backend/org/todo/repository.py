from bson.objectid import ObjectId
from pymongo import MongoClient


class Repository:
    def __init__(self):
        client = MongoClient('db', 27017)
        db = client.todo_db
        self.todos = db.todos
        self.todos.remove({})

    def find_all(self):
        todos = self.todos.find()
        domain_todos = list()
        for todo in todos:
            domain_todos.append(to_domain(todo))
        return domain_todos

    def find_by_id(self, todo_id):
        return to_domain(self.todos.find_one({'_id': ObjectId(todo_id)}))

    def insert(self, todo):
        return str(self.todos.insert_one(todo).inserted_id)

    def update(self, _id, todo):
        self.remove_by_id(_id)
        self.insert(to_mongo(todo))

    def remove_by_id(self, _id):
        self.todos.remove({'_id': ObjectId(_id)})


def to_domain(todo):
    todo['_id'] = str(todo['_id'])
    return todo


def to_mongo(todo):
    todo['_id'] = ObjectId(todo['_id'])
    return todo
