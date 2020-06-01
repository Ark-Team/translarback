const responseService = require("../service/EstadisticaService");

exports.selectAllStatisticsById = (req, res, next) => {
    const data = req.params.id;
    try {
        responseService.selectAllStatisticsById(data, res);
    } catch (Error) {
        return next(Error);
    }
};
exports.selectAllStatistics = (req, res, next) => {
    try {
        responseService.selectAllStatistics(req, res);
    } catch (Error) {
        return next(Error);
    }
};