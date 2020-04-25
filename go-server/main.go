package main

import (
	"fmt"
	"github.com/blownhither/WebRPCHello"
	"google.golang.org/grpc"
	"net"
)

func main() {
	listener, err := net.Listen("tcp", ":3333")
	if err != nil {
		panic(err)
	}
	node := webhello.MyWebHelloServer{Addr: listener.Addr()}
	server := grpc.NewServer()
	webhello.RegisterWebHelloServer(server, &node)
	fmt.Println("RPC serving on :3333")
	server.Serve(listener)
}