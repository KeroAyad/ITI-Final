FROM node:12
COPY nodeapp /node_app
WORKDIR /node_app
RUN npm install
CMD ["node", "/node_app/app.js"]
