import mysql from 'mysql';

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'DungCTB123!@#',
    database: 'mydb'
});

connection.connect(function(err, connection){
    if(err) throw err;
    console.log("Database connected!");
});

export default connection;
