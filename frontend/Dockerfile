# Dockerfile

FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY /frontend/frontend/package.json /usr/src/app

# RUN npm cache clean

# Move Packages to Working Dir
COPY /frontend/frontend/ /usr/src/app 
RUN npm install 

EXPOSE 4200

CMD [ "npm", "start" ]

