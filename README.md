# todo

todo front &amp; back

## Stacks

### Client

- React (Barebone, without an UI Framework)
- Redux
- Eslint
- Webpack
- Jest, Enzyme

### Server

- Node
- MongoDB

### Environment

- Husky
- Yarn

## How to install & build

### Basic setup

Note: this setup was tried out on Ubuntu LTS 18.04

```bash
ubuntu:~/environment/todo/client (master) $ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 18.04.2 LTS
Release:        18.04
Codename:       bionic
```

Make sure you have installed latest version of `node` and `yarn`

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash # install nvm

$ export NVM_DIR="$HOME/.nvm"
$ [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
$ [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

$ nvm install node

$ npm install -g yarn
```

### Client setup

#### 1. Install packages with `yarn`

```
$ cd client

$ yarn
```

#### 2. Launch client server

```
$ yarn start
```

#### Other available commands

```
$ yarn start|build|test|eject|lint
```

### Server setup

#### 1. Install packages with `yarn`

```
$ cd server

$ yarn
```

#### 2. Install and check mongodb

```
$ sudo apt update

$ sudo apt install mongodb

# check running
ubuntu:~/environment/todo (dev-server) $  sudo systemctl status mongodb
● mongodb.service - An object/document-oriented database
   Loaded: loaded (/lib/systemd/system/mongodb.service; enabled; vendor preset: enabled)
   Active: active (running) since Wed 2019-05-22 05:05:36 UTC; 5s ago
     Docs: man:mongod(1)
 Main PID: 14355 (mongod)
    Tasks: 23 (limit: 4915)
   CGroup: /system.slice/mongodb.service
           └─14355 /usr/bin/mongod --unixSocketPrefix=/run/mongodb --config /etc/mongodb.conf

May 22 05:05:36 ip-172-31-37-115 systemd[1]: Started An object/document-oriented database.
```

#### 3. Generate `.pem` files to use HTTPS (they are included in `.gitignore` by default)

```
$ cd server

$ openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
```

#### 4. Launch server

```
$ su # Optional: you may need to log on as a superuser because the server uses port 443 on which some systems you need a superuser privilege.

$ cd server

$ yarn start
```

#### Other available commands

```
$ yarn start|lint
```

## Etc (for myself)

Front dev (AWS)

```
https://5d2fbf9bed8b47c7abc49447f8d8f150.vfs.cloud9.us-east-1.amazonaws.com/
```

Server dev (GCP)

```
http://35.208.190.165:8081/
```

## 요구사항

● 기능 요구사항

- [x] 새로운 TODO(제목과 내용)를 작성할 수 있다.
- [x] TODO 목록을 볼 수 있다.
- [x] TODO 항목의 제목과 내용을 수정할 수 있다.
- [x] TODO 항목을 삭제할 수 있다.
- [x] 사용자의 선택에 의해 TODO에는 마감 기한을 넣을 수 있다.
- [x] TODO 항목의 우선순위를 설정 및 조절할 수 있다.
- [x] TODO 항목에 대한 완료 처리를 할 수 있다.
- [ ] 마감기한이 지난 TODO에 대해 알림을 노출할 수 있다.

● 성능 요구사항

- [x] TODO 이용 시 발생하는 오류 사항을 최소화한다.
- [x] 오류 발생 시 사용자가 이해하기 쉽게 표시한다.
- [x] 다른 사람이 읽기 쉬운 코드를 작성한다.
- [x] HTML/CSS에서 사용할 수 있는 최신 구조와 기술을 사용한다.

● 인터페이스 요구사항

- [x] 직관적이고 의미 전달이 명확한 화면을 사용자에게 제공한다.

제출물
● 소스 코드가 담긴 github URL

- [x] github의 readme에는 해당 웹서버를 리눅스 기준으로 실행하기 위해 필요한 설치 및 빌드 방법이 작성되어 있어야 합니다.

● 접속하여 테스트 가능한 URL

- [ ] heroku(https://www.heroku.com/), AWS(https://aws.amazon.com) 등
      서버에 배포하여 기능을 직접 사용해볼 수 있어야 합니다.
