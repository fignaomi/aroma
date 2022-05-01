module.exports = {
    getListaAjuda: function (connection, callback) {
        let querysql = 'SELECT * FROM sintoma';
        connection.query(querysql, callback);
    }
}