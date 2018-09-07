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
HTTP/1.1 200 OK
Connection: keep-alive
Date: Fri, 07 Sep 2018 12:50:17 GMT
accept-ranges: bytes
cache-control: no-cache
content-length: 3
content-type: application/json; charset=utf-8

204
```
