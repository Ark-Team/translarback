const pool = require("../config/mysqldev");

exports.selectAllStatisticsById = (data, res, next) => {
    const sql = `SELECT * FROM preguntas_fc where idiomaId = '${data}'`;
    pool.query(sql, (err, results) => {
        if (err) resolve("Error")
        res.send(results);
    });
};
exports.selectAllStatistics = (data, res, next) => {
    const sql = `select sum(acertadas) as acertadas , sum(fallidas) as fallidas from preguntas_fc`;
    pool.query(sql, (err, results) => {
        if (err) resolve("Error")
        res.send(results);
    });
};