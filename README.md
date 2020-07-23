# node[express] 프로젝트 설정

## 0. node를 개발하기 위해 필요한 설정(한번만)
```bash
# nodejs.org에서 LTS버전을 다운로드 하여 설치
# bitnami에서 WAMP(osx: MAMP)를 다운로드 하여 설치
# 아래의 모듈들을 --global / -g 를 통하여 설치
npm i -g firebase-tools			# firebase init/serve/deploy 등의 명령이 담긴 App
npm i -g nodemon						# 개발시 node app 명령(서버 실행)을 자동으로 재시작 해준다.
npm i -g supervisor					# 상동
npm i -g pm2								# 실제 서비스에서 app.js를 실행하는 모듈 
npm i -g express-cli				# express 프로젝트를 쉽게 만들어 줌
npm i -g sequelize-cli			# sequelize 프로젝트를 쉽게 만들어 줌
```

## 1. 프로젝트 시작하기
```bash
git init
git remote add origin 깃주소
# .gitignore파일 생성 및 내용추가 F1 > add gitignore > node, visualstudio code

# npm init -y를 실행하여 package.json을 생성
npm init -y

# 생성된 package.json 파일의 script영역을 다음과 같이 수정한다.
"scripts": {
	"start": "nodemon app"
},
```

## 2. 프로젝트 환경 설정
```bash
# 프로젝트에 필요한 module 설치
npm i express				# Express - Framework 
npm i pug 					# View
npm i dotenv 				# node에서 환경변수들은 process.env 에 저장되어 있고 거기에 원하는 변수를 등록할수 있게 도와주는 모듈
npm i mysql2				# 데이터베이스의 접속과 명령(쿼리)을 수행하는 모듈

npm i multer				# 파일 업로드를 처리해 주는 모듈
npm morgan					# logger(사용자가 서버에 접속하여 사용한 모든 행위를 기록)
npm uuid						# 난수발생
npm passport				# 로그인/로그아웃을 쉽게 해주는 모듈
npm passport-local
npm passport-kakao
npm sequelize				# Database ORM(Object-relational mapping)
npm mongoose				# MongoDB의 접속과 명령(쿼리)을 수행하는 모듈
```

## 3. 프로젝트 코딩
### 생성할 폴더
1. public > img, css, js, html
2. views > include, layout, page...
3. routers
4. modules

### 생성할 파일
1. / > app.js, .env
2. /modules > mysql-mod.js ...
3. /routers > board-router.js ...
4. /views/layout > default.layout.pug ...
5. /views/include > head.inc.pug, header.inc.pug, footer.inc.pug ...

### app.js 코딩
```js

```