# poly-todo


docker run -d -p 27017:27017 -p 28017:28017 --name db tutum/mongodb mongod //no need to expose ports


docker run --link db:db -d -p 5000:5000 476e1bc4cc21
