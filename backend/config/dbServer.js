let mysql = require('mysql');
module.exports = function () {
    return connection = mysql.createConnection({
        host: 'mydb.chw2xg6yedfk.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password: 'tangerina',
        database: 'aroma'
    })
};
