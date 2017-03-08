FROM registry.thinknet.co.th/sredev/nodejs-deploy:boron

COPY . /usr/src/app/

RUN npm install && npm rebuild node-sass