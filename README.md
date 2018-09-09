TypeScript HapiJS Returns Http Code 204 Demo
============================================

使用hapijs如何向客户端发回一个http code `204`.

```
npm install
npm run demo
```

将会启动Server:

```
Server running at: http://localhost:8000
```

客户端访问：

```
$ http GET http://localhost:8000/hello
HTTP/1.1 204 No Content
Connection: keep-alive
Date: Sun, 09 Sep 2018 04:47:36 GMT
cache-control: no-cache


```
