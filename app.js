const express = require('express')
const responseController = require("../TraslateService/controller/ResponseController")
const estadisticaController = require("./controller/EstadisticaController")
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With,Content-Type, Accept,Access-Control-Allow-Requested-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
    res.header("Allow", "GET,POST,OPTIONS,PUT,DELETE");
    next();
});

app.get('/pregunta', responseController.findResponse);
app.get('/estadisticas/:id', estadisticaController.selectAllStatisticsById);
app.get('/estadisticas', estadisticaController.selectAllStatistics);
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});

module.exports = app;
