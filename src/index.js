const grpc = require("@grpc/grpc-js");
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + "/../proto";

const packageDefinition = protoLoader.loadSync(
    [
        PROTO_PATH + "/clarifai/api/status/status_code.proto",
        PROTO_PATH + "/clarifai/api/status/status.proto",
        PROTO_PATH + "/clarifai/api/resources.proto",
        PROTO_PATH + "/clarifai/api/service_processed.proto",
    ],
    {
        keepCase: true,
        longs: String,
        enums: Number,
        defaults: true,
        oneofs: true
    }
);

class ClarifaiStub {
    static grpc(base = undefined) {
        if (base === undefined)
            base = process.env.CLARIFAI_GRPC_BASE;
        if (base === undefined)
            base = "api.clarifai.com"
        const grpcProtoDescriptor = grpc.loadPackageDefinition(packageDefinition);
        return new grpcProtoDescriptor.clarifai.api.V2(base, grpc.ChannelCredentials.createSsl());
    }

    static insecureGrpc() {
        const grpcProtoDescriptor = grpc.loadPackageDefinition(packageDefinition);
        return new grpcProtoDescriptor.clarifai.api.V2('api-grpc.clarifai.com:18080', grpc.credentials.createInsecure());
    }
}

module.exports = {ClarifaiStub};
