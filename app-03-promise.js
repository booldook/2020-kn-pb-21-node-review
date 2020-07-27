/**************** 외부 모듈 ******************/
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "000000",
	database: 'board',
	waitForConnections: true,
	connectionLimit: 10
});


/**************** 서버 실행 ******************/
app.listen(process.env.PORT, () => { 
	console.log(`http://127.0.0.1:${process.env.PORT}`) 
});

/**************** 내부 모듈 ******************/


/**************** 경로 설정 ******************/
const publicPath = path.join(__dirname, './public');
console.log(publicPath);

/**************** 초기 설정 ******************/
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/", express.static(publicPath));

/**************** 라우터 설정 ******************/

app.get('/', (req, res, next) => {
	let connect;
	pool.getConnection().then((r) => {
		connect = r;
		return connect.query('SELECT * FROM gbook');
	}).then((r) => {
		connect.release();
		res.json(r);
	}).catch((e) => {
		res.json(e);
	});
});

app.get('/new', async (req, res, next) => {
	try {
		const connect = await pool.getConnection();
		const r = await connect.query('SELECT * FROM gbook');
		connect.release();
		res.json(r);
	}
	catch(e) {
		res.json(e);
	}
});

