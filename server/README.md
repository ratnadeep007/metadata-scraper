# MetaScraper Server

Metascraper server is built upon Nest.js web framework and MongoDB.

To run in local environment set MONGOURL

Linux/MacOS: 
`export MONGOURL=<URL>`

To start app: `npm start` or `npm run start:dev` for development mode
To production: `npm run build` and `node dist/main.js`

You can find `Dockerfile`. App docker ready.

Build: `docker -t <tag_name> .`
Run: `docker --name <name_of_container> -p <host_port>:3000 -e MONGOURL=<Mongodb_url> <tag_name>`

After running the program you can use `POSTMAN` or `curl` to make request and test.

#### Using curl
Api for getting scraping data is `POST` method and `url` as query parameter and returns `application/json` data.

```bash
curl -X POST \
  '<server_addresss>/scrape?url=<url_to_scrape_metadata>' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ijk5NzM2MzQ0NDUiLCJwYXNzd29yZCI6InJhdG5hZGVlcCIsImlhdCI6MTU2MjQwNTMyN30.mQPH77OPKsEPvUE0G-gSUZwSVy3eLzXHiNQLizlLDqM' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 1b6d3165-c4d2-46c2-b1fb-fa2772574a1d' \
  -H 'cache-control: no-cache' \
  -d '{
	"loc": [12.906490199999999, 77.60841889999999]
}'
```
