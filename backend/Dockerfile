FROM ubuntu:15.10
RUN apt-get update && apt-get upgrade
RUN apt-get -y --force-yes install git
RUN apt-get -y --force-yes install python3
RUN apt-get -y --force-yes install python3-pip
RUN pip3 install flask
RUN pip3 install -U flask-cors
RUN pip3 install pymongo
COPY backend /backend
EXPOSE 5000
ENTRYPOINT PYTHONPATH=/backend python3 /backend/org/todo/ws.py