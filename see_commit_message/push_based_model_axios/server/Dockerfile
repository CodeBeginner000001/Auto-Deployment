# base image choosing the base image wisely can reduce the 
# amount of code lines used and memory as well
ARG NODE_VERSION=23.7.0
FROM node:${NODE_VERSION}-alpine

# copy the required file from source to base image 
# you can change the name of the source file in the base image
# COPY index.js main.js
COPY package.json package.json
COPY package-lock.json package-lock.json
# run the node_modules installation command
RUN npm install
COPY index.js index.js
# expose the port 
EXPOSE 4000
# Whenever the image is executed in the container this command will run
ENTRYPOINT [ "node","index.js" ] 