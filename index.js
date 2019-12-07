const server = require('./server');

const port = proccess.env.PORT || 5000;

server.listen(port, () => {
    console.log(`listening on por ${PORT}`);
})