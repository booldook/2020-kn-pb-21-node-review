const express = require('express');
const router = express.Router();
const { pool } = require('../modules/mysql-mod');
const moment = require('moment');

router.get(["/", "/li", "/li/:page"], async (req, res, next) => { // 리스트를 보여주기/SELECT
	let connect, sql, sqlVal, result, lists;
	try {
		sql = 'SELECT * FROM review ORDER BY id DESC';
		connect = await pool.getConnection();
		result = await connect.execute(sql);
		connect.release();
		lists = result[0].map((v) => {
			v.createdAt = moment(v.createdAt).format('YYYY-MM-DD hh:mm:ss');
			return v;
		});
		const pug = {title: "리스트", js: "crud", lists};
		res.render("page/crud-li.pug", pug);
	}
	catch(e) {
		console.log(e);
		res.json(e);
	}
});

router.get("/wr", (req, res, next) => { // 신규 작성 폼 보여주기/PUG
	const pug = {title: "글 작성", js: "crud"}; 
	res.render('page/crud-wr.pug', pug);
});

router.get("/up/:id", (req, res, next) => { // 수정 폼 보여주기/PUG/SELECT
	const pug = {title: "글 수정", js: "crud"}; 
	res.render('page/crud-wr.pug', pug);
});

router.get("/rev/:id", (req, res, next) => { // 삭제하기/DELETE

});

router.post("/save", async (req, res, next) => { // 저장하기/INSERT
	let { name, age } = req.body;
	let connect, sql, sqlVal, result;
	try {
		sql = 'INSERT INTO review SET name=?, age=?';
		sqlVal = [name, age];
		connect = await pool.getConnection();
		result = await connect.execute(sql, sqlVal);
		connect.release();
		res.redirect('/crud/li');
	}
	catch(e) {
		res.json(e);
	}
});

module.exports = router;