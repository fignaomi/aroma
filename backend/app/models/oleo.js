module.exports = {
    getOleo: function (connection, callback,id) {
    let querysql = `SELECT * from oleo where id_oleo = ${id}`;
        connection.query(querysql, callback);
    }
}