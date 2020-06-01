const pool = require("../config/mysqldev");

async function acertoFunction(data) {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE preguntas_fc
                    SET preguntas_fc.acertadas =preguntas_fc.acertadas +1
                    where idiomaId ='${data}'`;
        pool.query(sql, (err, results) => {
            if (err) return next(new Error.ServerError(i18n.__("SERVER_ERROR")));
            resolve(results.message);
        });
    }).catch((err) => reject(err));
};
async function falloFunction(data) {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE preguntas_fc
                    SET preguntas_fc.fallidas =preguntas_fc.fallidas +1
                    where idiomaId ='${data}'`;
        pool.query(sql, (err, results) => {
            if (err) return next(new Error.ServerError(i18n.__("SERVER_ERROR")));
            resolve(results.message);
        });
    }).catch((err) => reject(err));
};

module.exports.acertoFunction = acertoFunction;
module.exports.falloFunction = falloFunction;