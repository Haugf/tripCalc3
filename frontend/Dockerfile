# Dockerfile

FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY /frontend/frontend/package.json /usr/src/app
# RUN npm cache clean
RUN npm install 


# Move Packages to Working Dir
COPY /frontend/frontend/ /usr/src/app 

EXPOSE 4200

CMD [ "npm", "start" ]

