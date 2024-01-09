## Front-End website using ReactJs and Dynamic data from the Api

- Scss
- Javascript
- React
- NodeJS
- Api
- SQL

## Run these commands to get started with front-end

`git clone https://github.com/nothil/frontend-design.git`

`npm install`

`npm start`

### Check the complete website on localhost:3000

### This website fetches the data from the bd MYsql. so the brands section will be empty until the sever is up

### To run the server navigate to the sever folder(navigate to src/server) and run the command below

`node app.js`

## These are the DB connection properties you may update to connect to yours

`user: "postgres"`
`host: "localhost"`
`database: "your-database"`
`password: "your-password"`
`port: 5432,`

## sever will run at port:3001 copy the line below and past into the browser to see the json

`check http://localhost:3001/brands`

## Api to return all brands from the db and

`check http://localhost:3001/brands?filter=brand`

## Api to filter brand list

## I have deployed this website on vercel

[click here](https://frontend-design-swart.vercel.app/)
