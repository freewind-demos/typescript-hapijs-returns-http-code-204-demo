import * as Hapi from 'hapi'
import {Request, ResponseToolkit} from 'hapi'

const server = new Hapi.Server({
    host: 'localhost',
    port: 8000
})

server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request: Request, h: ResponseToolkit) {
        console.log('request /hello')
        return h.response().code(204)
    }
});

(async () => {
    await server.start()
    console.log('Server running at:', server.info.uri)
})()
