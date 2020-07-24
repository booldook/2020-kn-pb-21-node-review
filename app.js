/**************** 외부 모듈 ******************/
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

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
app.get("/api", (req, res, next) => {
	const json = {
		code: 200,
		pager: {page: 1, lastPage: 5},
		name: 'booldook',
		lists: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
	}
	res.json(json);
});

app.post("/api/save", (req, res, next) => {
	// let name = req.body.name;
	// let age = req.body.age;
	let { name, age } = req.body;
	let json = {
		name, age, msg: "잘 받았습니다."
	}
	res.json(json);
});

app.get("/api/save", (req, res, next) => {
	let { name, age } = req.query;
	let json = {
		name, age, msg: "잘 받았습니다."
	}
	res.json(json);
});


