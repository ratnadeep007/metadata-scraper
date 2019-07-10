# Metadata Scrape

This project contains 2 folder server and client

## Server
It is build using Nest.js due to support of Typescript and MongoDB.

To run in local environment set MONGOURL

Linux/MacOS: 
`export MONGOURL=<URL>`

To start app: `npm start` or `npm run start:dev` for development mode
To production: `npm run build` and `node dist/main.js`

You can find `Dockerfile`. App docker ready.

Build: `docker -t <tag_name> .`
Run: `docker --name <name_of_container> -p <host_port>:3000 -e MONGOURL=<Mongodb_url> <tag_name>`

## Client
Client is build using React and Typescript

To run in local environment change `baseURL` in `config/interceptor.js` to backend url

To start app: `npm start`
To build app: `npm run build` and then serve using ngnix/serve/http-serve the build folder.

You can find `Dockerfile`. App docker ready.

Build: `docker -t <tag_name> .`
Run: `docker --name <name_of_container> -p <host_port>:3000 <tag_name>`

P.S. Don't forget to run `npm install` in each directory before starting app