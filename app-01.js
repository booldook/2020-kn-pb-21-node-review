/**************** 외부 모듈 ******************/
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();	// .env 내용을 process.env에 등록

/**************** 서버 실행 ******************/
app.listen(process.env.PORT, () => { 
	console.log(`http://127.0.0.1:${process.env.PORT}`) 
});

/**************** 내부 모듈 ******************/


/**************** 경로 설정 ******************/
const publicPath = path.join(__dirname, './public');
console.log(publicPath);

/**************** 초기 설정 ******************/
app.use(express.json());	// json 파싱
app.use(express.urlencoded({extended: false})); // req.body
app.use("/", express.static(publicPath));	// ./public -> /css, /html, /img


/**************** 라우터 설정 ******************/
app.use((req, res, next) => {
	// 이러한 무조건 통과해야 되는 라우터를 다른 말로 middleware라 한다.
	req.booldook = 'ㅎㅎㅎ';
	next();
});

app.get('/', (req, res, next) => {
	res.send(`<h1>Hello World</h1>`);
});

app.get('/a', (req, res, next) => {
	res.send(`<h1>Hello A</h1>`);
});

app.get('/:q', (req, res, next) => {
	console.log(req.params);
	res.send(`<h1>Hello ${req.params.q}</h1>`);
});


/**************** 오류 설정 ******************/
