const express = require("express");
let app = new express();

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

let isA = true;

let one = [
     {
    "_id": "1d7df7a80139c9c0312b1121",
    "type": "tractor",		                  // tractor | drone
    "createdAt": "2020-03-11T17:33:53.119Z",
    "updatedAt": "2020-03-11T18:33:53.119Z",
    "status": "on-mission",			    // unreachable | idle | on-mission
    "location": {  "latitude": "35.787449",  "longitude": "-78.6438197", 
          "updatedAt": "2019-09-15T20:14:02.877Z" }
},
{
    "_id": "2d7df7a80139c9c0312b1121",
    "type": "drone",		                  // tractor | drone
    "createdAt": "2020-03-11T17:33:53.119Z",
    "updatedAt": "2020-03-11T18:33:53.119Z",
    "status": "on-mission",			    // unreachable | idle | on-mission
    "location": {  "latitude": "35.787449",  "longitude": "-78.6338197", 
          "updatedAt": "2019-09-15T20:14:02.877Z" }
},
{
    "_id": "3d7df7a80139c9c0312b1121",
    "type": "tractor",		                  // tractor | drone
    "createdAt": "2020-03-11T17:33:53.119Z",
    "updatedAt": "2020-03-11T18:33:53.119Z",
    "status": "idle",			    // unreachable | idle | on-mission
    "location": {  "latitude": "35.792949",  "longitude": "-78.6647197", 
          "updatedAt": "2019-09-15T20:14:02.877Z" }
}
];

let two = [
    {
    "_id": "1d7df7a80139c9c0312b1121",
    "type": "tractor",		                  // tractor | drone
    "createdAt": "2020-03-11T17:33:53.119Z",
    "updatedAt": "2020-03-11T18:33:53.119Z",
    "status": "on-mission",			    // unreachable | idle | on-mission
    "location": {  "latitude": "35.7979",  "longitude": "-78.68389", 
          "updatedAt": "2019-09-15T20:14:02.877Z" }
},
{
    "_id": "2d7df7a80139c9c0312b1121",
    "type": "drone",		                  // tractor | drone
    "createdAt": "2020-03-11T17:33:53.119Z",
    "updatedAt": "2020-03-11T18:33:53.119Z",
    "status": "on-mission",			    // unreachable | idle | on-mission
    "location": {  "latitude": "35.797449",  "longitude": "-78.6638197", 
          "updatedAt": "2019-09-15T20:14:02.877Z" }
},
{
    "_id": "3d7df7a80139c9c0312b1121",
    "type": "tractor",		                  // tractor | drone
    "createdAt": "2020-03-11T17:33:53.119Z",
    "updatedAt": "2020-03-11T18:33:53.119Z",
    "status": "idle",			    // unreachable | idle | on-mission
    "location": {  "latitude": "35.799949",  "longitude": "-78.6226197", 
          "updatedAt": "2019-09-15T20:14:02.877Z" }
}

]

app.get('/', function(req, res) {
    let result = one;
    if (!isA) {
        result = two;
    }
    isA = !isA;
    res.send(result);
})


let port = 8081;

app.listen(port, function() {
    console.log('server started to listening to port: ', port);
});
