var pg = require('pg');             // Require node module postgres
// Environment Variable
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/jeremycloutier';    // Establish connection to my database.

// Creates new pg.Client and passes it the string variable above.
var client = new pg.Client(connectionString);

// Enables client to interact with the database.
client.connect();