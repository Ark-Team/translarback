const translate = require('@vitalets/google-translate-api');
const langs = require("../config/constant").langs;
const opts = require("../config/constant").opts;

optsRespuesta: {
    to: translate.languages.getCode("spanish")
}

exports.traslateResponse = (data, res, opts2, next) => {
    translate(data, opts2)
        .then(response => {
            respuestaObj = {
                respuesta: response.text
            }
            return res.send(respuestaObj);
        }).catch((err) => res.send("we can't bear this question"));
};
async function traslateQuestion(data) {
    return new Promise((resolve, reject) => {
        translate(data, opts)
            .then(response => {
                var keys = Object.keys(langs);
                var idioma = response.from.language.iso;
                keys.forEach(function (key) {
                    if (key, key == idioma) {
                        algo = {
                            idioma: langs[key],
                            keyIdioma: key,
                            pregunta: response.text
                        }
                        resolve(algo);
                    }
                });
            });
    }).catch((err) => (err));
};
module.exports.traslateQuestion = traslateQuestion;