const express = require('express');
const router = express.Router();
const { pool } = require('../modules/mysql-mod');
const moment = require('moment');
let connect, sql, sqlVal, result;

router.get(["/", "/li", "/li/:page"], async (req, res, next) => { // 리스트를 보여주기/SELECT
	try {
		sql = 'SELECT * FROM review ORDER BY id DESC';
		connect = await pool.getConnection();
		result = await connect.execute(sql);
		connect.release();
		/* lists = result[0].map((v) => {
			v.createdAt = moment(v.createdAt).format('YYYY-MM-DD hh:mm:ss');
			return v;
		}); */
		result[0].forEach((v) => {
			v.createdAt = moment(v.createdAt).format('YYYY-MM-DD hh:mm:ss');
		});
		const pug = {title: "리스트", js: "crud", lists: result[0]};
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

router.get("/up/:id", async (req, res, next) => { // 수정 폼 보여주기/PUG/SELECT
	let id = req.params.id;
	try {
		sql = 'SELECT * FROM review WHERE id='+id;
		connect = await pool.getConnection();
		result = await connect.execute(sql);
		connect.release();
		const pug = {title: "글 수정", js: "crud", list: result[0][0]}; 
		res.render('page/crud-wr.pug', pug);
	}
	catch(e) {
		console.log(e);
		res.json(e);
	}
});

router.get("/rev/:id", async (req, res, next) => { // 삭제하기/DELETE
	let id = req.params.id;
	try {
		sql = 'DELETE FROM review WHERE id='+id;
		connect = await pool.getConnection();
		result = await connect.execute(sql);
		res.redirect('/crud/li');
	}
	catch(e) {
		console.log(e);
		res.json(e);
	}
});

router.post("/save", async (req, res, next) => { // 저장하기/INSERT
	let { name, age, id } = req.body;
	try {
		if(id) {
			sql = 'UPDATE review SET name=?, age=? WHERE id=?';
			sqlVal = [name, age, id];
		} 
		else {
			sql = 'INSERT INTO review SET name=?, age=?';
			sqlVal = [name, age];
		}
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