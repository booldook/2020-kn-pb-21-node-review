const express = require('express');
const router = express.Router();

router.get(["/", "/li", "/li/:page"], (req, res, next) => { // 리스트를 보여주기/SELECT

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

router.post("/save", (req, res, next) => { // 저장하기/INSERT
	res.send("....");
});

module.exports = router;