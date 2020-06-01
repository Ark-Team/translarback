var similarity = require('similarity')
const pool = require("../config/mysqldev");

async function selectAllQuestions() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM preguntas";
        pool.query(sql, (err, results) => {
            if (err) resolve("Paila")
            resolve(results);
        });
    }).catch((err) => reject(err));
};

exports.similarityQuestion = (data, res, next) => {
    numero = similarity(data, 'food');
    return res.send(numero);
};

function similarityQuestionQuantity(data, bd) {
    numero = similarity(data, bd);
    return (numero);
}
async function findResponse(data) {
    return new Promise((resolve, reject) => {
        Promise.resolve(selectAllQuestions()).then(results => {
            results.forEach(result => {
                if (similarityQuestionQuantity(data, result.pregunta) > 0.80) {
                    respose = {
                        pregunta: data,
                        respuesta: result.respuesta
                    }
                    resolve(respose);
                }
            });
            reject("Try again with another question")
        });
    }).catch((err) => ("Try again with another question"));
}
module.exports.findResponse = findResponse;