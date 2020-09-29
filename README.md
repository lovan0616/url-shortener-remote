# URL shortener v1.0

一個使用 Node.js + Express 打造的縮網址網站，你可於此貼上一組網址，經過縮短後取得短網址。

## Features - 產品功能

1. 使用者可以貼上原始網址，以取得縮網址
2. 使用者可以點擊Copy鍵複製縮網址

## Environment SetUp - 環境建置

1. [Node.js](https://nodejs.org/en/)
2. [MongoDB](https://www.mongodb.com/download-center/community)

## Executing - 專案執行流程

0. 啟動MongoDB資料庫伺服器，並安裝Robo 3T，建立連線、建立資料庫

1. 打開你的終端機，Clone 此專案至本機電腦

```
git clone https://github.com/lovan0616/url-shortener-remote.git
```

2. 開啟終端機，進入存放此專案的資料夾

```
cd url-shortener-remote
```

3. 安裝 npm 套件

```
在終端機輸入 npm install 指令
```

4. 安裝 nodemon 套件

```
在終端機輸入 npm install -g nodemon 指令
```

5. 啟動伺服器，執行 app.js 檔案

```
在終端機輸入 npm run dev 指令
```

7. 當終端機出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
the app is listening
mongodb connected!
```

現在，你可開啟任一瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 開始使用囉！


## Contributor - 專案開發人員

> [Liam Wu]](https://github.com/lovan0616)