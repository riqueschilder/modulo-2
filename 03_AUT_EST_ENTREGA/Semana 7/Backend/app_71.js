const express = require('express'); 
const app = express();
const sqlite3 = require('sqlite3').verbose();


const hostname = '127.0.0.1';
const port = 3022;
const DBPATH = "dados.db"
app.use(express.static("../Frontend/Curriculo/"));

app.get('/info', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Info';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});