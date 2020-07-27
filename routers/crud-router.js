const express = require('express');
const router = express.Router();

router.get(["/", "/li", "/li/:page"], (req, res, next) => { // 리스트를 보여주기
	
});

router.get("/wr", (req, res, next) => { // 신규 작성 폼 보여주기

});

router.get("/up/:id", (req, res, next) => { // 수정 폼 보여주기

});

router.get("/rev/:id", (req, res, next) => { // 삭제하기

});

router.post("/save", (req, res, next) => { // 저장하기

});

module.exports = router;