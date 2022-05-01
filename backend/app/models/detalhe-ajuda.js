module.exports = {
    getDetalhes: function (connection, callback, id) {
        let querysql = `SELECT titulo, procedimento,  group_concat(oleo) as oleo
                        FROM ajuda
                        WHERE ajuda.id = ${id}`;
        connection.query(querysql, callback);
    }
}