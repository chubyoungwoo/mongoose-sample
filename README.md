# mongoose-sample
Nodemon은 프로젝트 폴더의 파일들을 모니터링 하고 있다가 파일이 수정되면 서버를 자동으로 restart 시켜주는 패키지이다.
모니터링도 하고 상태값도 표시하여 준다.
설치하기
다음 명령어를 이용하여 설치한다. (-dev를 붙이면, development mode, 즉 local에서만 사용하겠다는 의미)
npm install nodemon --save-dev
package.json에 구문을 추가한다 "dev" : "nodemon app.js"
npm run dev 명령어로 서버를 실행시킨다.

pm2 모니터링 
npm install -g pm2@latest

실행 : pm2 start app.js
중지 : pm2 stop app.js
모니터 : pm2 monit
로그 : pm2 log
목록 : pm2 list

터미널에서 pm2 오류발생시 window PowerShell 을 관리자 권한으로 실행
get-help Set-ExecutionPolicy
#스크립트 실행규칙변경 로컬에서 자신이 만든 스크립트 실행권한으로 변경
Set-ExecutionPolicy RemoteSigned

pm2 : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\cbw\AppData\Roaming\npm\pm2.ps1 파일을 로드할 수 없습니다.


뼈대가 잡혀있는 프로젝트를 생성하기
express-generator 모듈을 사용
1. Express 프레임워크 생성하기
express-generator 모듈로 프로젝트를 생성하면 프로젝트 뼈대를 만들어 줍니다.
1) express-generator 모듈 설치
우선 exporess-generator 모듈은 내장 모듈이 아니므로, npm을 통해 모듈을 설치해야 합니다.
# npm install –g express-generator