package webhello

import (
	"context"
	"fmt"
	"net"
	"sync"
)

type MyWebHelloServer struct {
	mutex sync.Mutex
	count int
	Addr  net.Addr
}

func (s *MyWebHelloServer) SayHello(ctx context.Context, msg *HelloMessage) (*HelloMessage, error) {
	s.mutex.Lock()
	defer s.mutex.Unlock()
	s.count++
	ret := &HelloMessage{Msg: fmt.Sprintf("(%d) gRPC server at %v received [%v]", s.count, s.Addr.String(), msg.Msg)}
	fmt.Printf("received %v returns %v\n", msg, ret.Msg)
	return ret, nil
}
