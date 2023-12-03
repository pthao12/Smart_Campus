import mysql from 'mysql';

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DungCTB123!@#',
    database: 'mydb'
});

connection.connect(function(err, connection){
    if(err) throw err;
    console.log("Database connected!");
});

export default connection;
