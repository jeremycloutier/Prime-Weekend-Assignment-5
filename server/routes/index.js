var express = require('express');
var pg = require('pg');
var path = require('path');
var router = express.Router();

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/jeremycloutier';

router.get('/getUsers', function(req, res) {
    var userResults = [];
    console.log('Get users is accessible');
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users ORDER BY id ASC;");

        // Stream results back one row at a time
        query.on('row', function(row) {
            userResults.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            client.end();
            return res.json(userResults);
        });

        if(err) {
            console.log(err);
        }
    });
});

router.get('/getAddresses', function(req, res){
    var addressResults = [];



    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users JOIN addresses ON users.id = addresses.user_id;");

        // Stream results back one row at a time
        query.on('row', function(row) {
            addressResults.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            client.end();
            return res.json(addressResults);
        });

        if(err) {
            console.log(err);
        }
    });
});

router.get('/', function(request, response){
    var pathJoined = path.join(__dirname, '../public/views/index.html');
    console.log('Joined path', pathJoined);
    response.sendFile(pathJoined);
});

router.get('/*', function(request, response){
    response.redirect('/');
});

module.exports = router;