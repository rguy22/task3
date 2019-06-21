var express = require("express");
var router = express.Router();
const mysql = require("mysql2/promise");

let pool;
(async function initializePool() {
  pool = await mysql.createPool({
    host: "localhost",
    user: "root",
    password: "guyroizman25",
    database: "-",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
})();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
