FROM python:3.6
# install Rasa
RUN pip3 install rasa
# install node
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
# copy files
WORKDIR /srv
ADD . /srv
# install node modules
RUN npm i
# train model
RUN rasa train
# start rasa server and node web interface
CMD rasa run -m models --enable-api --cors "*" --debug & node index