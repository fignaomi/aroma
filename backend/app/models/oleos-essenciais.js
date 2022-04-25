module.exports = {
    getOleos: function (connection, callback) {
        let querysql = 'select * from oleo';
        connection.query(querysql, callback);
    }
}