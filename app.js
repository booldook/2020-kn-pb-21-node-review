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


/**************** 오류 설정 ******************/
