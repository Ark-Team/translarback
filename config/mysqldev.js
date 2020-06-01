const mysql = require("mysql");
const constant = require("../config/constant");

const config = {
  host: constant.HOST,
  user: constant.USER,
  database: constant.DATABASE
};
const pool = mysql.createPool(config);
module.exports = pool;
