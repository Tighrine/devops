FROM ubuntu:16.04

# Install Node.js
RUN apt-get -qq update &&\
    apt-get install --yes python-software-properties software-properties-common &&\
    apt-get install --yes gnupg &&\
    apt-get -qq install --yes curl &&\
    curl --silent --location https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install --yes nodejs && \
    node -v &&\
    npm -v

#copy the app folder
COPY /app /app
COPY /start.sh /root/start.sh
COPY --chown= . . 

#enter in the app folder && install packages
RUN cd /app; npm install

#install mysql
RUN apt-get update \
    && DEBIAN_FRONTEND=nointeractive apt-get install -y apt-utils vim curl memcached \
    zip imagemagick mysql-server

EXPOSE 3000

CMD [ "/bin/bash","/root/start.sh" ]
