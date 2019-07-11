# Metadata Scrape Client
Client is build using React and Typescript

To run in local environment change `baseURL` in `config/interceptor.js` to backend url

To start app: `npm start`
To build app: `npm run build` and then serve using ngnix/serve/http-serve the build folder.

You can find `Dockerfile`. App docker ready.

Build: `docker -t <tag_name> .`
Run: `docker --name <name_of_container> -p <host_port>:3000 <tag_name>`
