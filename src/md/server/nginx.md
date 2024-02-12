### nginx 部署

出现 404 的情况

```sh
location / {
    try_files $uri $uri/ /index.html;
}
```

代理后端接口

```sh
location /api { 
    # 这里是前端请求配置的连接，比如：/api/user，会被转发到后端的/user接口
    # rewrite ^/api(.*)$ $1 break; 
    # 这里是重写，如果你的后端接口没有/api前缀，可以使用这个
    # 这里来配置后端接口地址
    proxy_pass http://127.0.0.1:8080; 
    client_max_body_size 100M;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```
