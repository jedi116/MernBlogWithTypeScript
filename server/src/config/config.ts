const config = {
    mongo: {
        options: {
            socketTimeoutMS: 30000,
            keepAlive: true,
            autoIndex: false,
            retryWrites: false
        },
        url: 'mongodb+srv://BlogAdmin:yidman3026@typescriptblog.ceyaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    },
    server: {
        host: 'localhost',
        port: 1337
    }
};

export default config;
