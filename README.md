```bash
# Go Server
protoc -I. --go_out=plugins=grpc:. hello.proto
go install ./...
$GOPATH/bin/go-server

# Js Client
protoc -I=. hello.proto --js_out=import_style=commonjs,binary:js-client  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:js-client  
# if needed, provide your plugin location --plugin=protoc-gen-grpc-web=$HOME/tools/protoc-gen-grpc-web-1.0.7-darwin-x86_64 
npm install grpc --save
npm install -g browserify browserify-fs
cd js-client
mkdir dist
#browserify client.js -o dist/bundle.js

browserify -fs client.js -o dist/bundle.js

# Porxy, web access 3334, grpc listen on 3333
cd ..
./grpcwebproxy-v0.9.1-osx-x86_64 --backend_addr=:3333 --server_http_debug_port 3334 --allow_all_origins --run_tls_server=false
```
