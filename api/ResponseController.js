const searchQuestion = require('../logic/SearchQuestion')
const contador = require('../logic/Contador')
const traductor = require('../logic/TraductorService')

async function findResponse(req, res, next) {
    const params = req.query.pregunta;
    Promise.resolve(traductor.traslateQuestion(params)).then(result => {
        try {
            var opts = { 'to': result.keyIdioma };
            Promise.resolve(searchQuestion.findResponse(result.pregunta)).then(result2 => {
                if (result2.respuesta == undefined) {
                    contador.falloFunction(result.idioma);
                    traslateResponse(result2, res, opts);
                } else {
                    contador.acertoFunction(result.idioma);
                    traslateResponse(result2.respuesta, res, opts);
                }
            });
        } catch (Error) {
            return next(Error);
        }
    }).catch((err) => console.log(err));
}
function traslateResponse(req, res, idiom, next) {
    traductor.traslateResponse(req, res, idiom);
}
module.exports.findResponse = findResponse;