const service = require('./hello_grpc_web_pb');
const proto = require('./hello_pb');

const SEVER_ADDR = "http://localhost:3334";
let client = new service.WebHelloClient(SEVER_ADDR, {}, {});
console.log("gRPC client connecting to porxy at", client.hostname_);

function SayHi(msg, domCallback) {
    console.log("Invoking sayHello RPC on proxy server " + SEVER_ADDR);
    domCallback("Invoking sayHello RPC on proxy server " + SEVER_ADDR);
    client.sayHello(new proto.HelloMessage([msg]), {}, function (err, response) {
        if(err) {
            console.log("Error!", err);
            domCallback(err);
        } else {
            console.log(response.getMsg());
            domCallback(response.getMsg());
        }
    });
}

window.SayHi = SayHi;       // make available in browser


