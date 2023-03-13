import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3306,
  database: "shopping",
});

connection.connect();

module.exports = connection;
