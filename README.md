# node[express] 프로젝트 설정

## 1. 프로젝트 시작하기
```bash
git init
git remote add origin 깃주소

# npm init -y를 실행하여 package.json을 생성
npm init -y

# 생성된 package.json 파일의 script영역을 다음과 같이 수정한다.
"scripts": {
	"start": "nodemon app"
},
```