# MEALIOWN-server

> Mealiown은 식사 점수 기록 앱입니다. 식사 시간, 식사 종류, 3가지의 식사 점수를 기록합니다.
> meal-i-own과 million의 뜻을 가지고 있습니다.  
> '나의 식사'를 기록합니다. 한 기록당 최고점은 1000점이고 1000일을 기록하면 총 '천만(million)'을 달성할 수 있습니다. 1000일이 기준입니다.
> 프로젝트는 https://mealiown.netlify.com/ 에서 확인해보실 수 있습니다.
> 서버는 [glitch](https://even-friction.glitch.me/graphql)에서 배포됩니다.


## 프로젝트 목표

- user를 추가한다.
- 알맞은 id와 pw를 입력하면 token을 제공한다.
- record를 기록한다.
- 기록한 record를 조건에 맞게 검색하고 반출한다.


## 서비스 기능

### 1. Schema
- graphql을 통해서 schema를 작성

### 2. Model
- mongoose를 통해서 data model을 구성

### 3. Database connection
- mongoose를 통해서 mlab으로 연결

### 4. Encryption
- bcrypt로 user의 pw를 변환해서 저장
- token으로 client와의 인증 서비스 구현

### 5. Provide information
- sign up
    - id가 중복되지 않는다면 새로운 user를 저장함
- login 
    - id와 bcrypt로 decryption된 pw값을 user 데이터에서 비교해서 일치하면 그에 맞는 token을 반출하고 login 상태로 넘어감
- record
    - record를 저장함
- records
    - 대쉬보드 첫 페이지의 정보를 불러옴. 모든 record의 데이터의 통계를 내어 반출함
- filtered
    - 대쉬보드 filtered 상태의 정보를 불러옴. 조건에 해당하는 record의 데이터를 통계를 내어 반출함. 해당 데이터가 없다면 '0'을 반출함.


## 개발 기간

18.08.04 ~ 

## 기술 스택 & 툴

- Network
  - express
  - express-graphql
- Database Control
  - mongoose
  - graphql
- Encryption
  - bcrypt
  - jsonwebtoken 
- convention
  - eslint-plugin-prettier
  - prettier
- version control
  - git flow
- etc
  - moment


### 환경

- [glitch](https://even-friction.glitch.me/graphql) 를 통한 웹 서버 배포
- mlab을 통한 데이터 베이스 활용
- [netlify](https://mealiown.netlify.com/) 를 통한 웹사이트 배포