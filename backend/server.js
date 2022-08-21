const fastify = require('fastify')()

fastify.register(require('@fastify/cors'), (instance) => {
  return (req, callback) => {
    const corsOptions = {
      // This is NOT recommended for production as it enables reflection exploits
      origin: true
    };

    // do not include CORS headers for requests from localhost
    if (/^localhost$/m.test(req.headers.origin)) {
      corsOptions.origin = false
    }

    // callback expects two parameters: error and options
    callback(null, corsOptions)
  }
})

fastify.register(async function (fastify) {

// Declare a route

// irgendwie muss ich auf das event reagieren -> event driven programming!

//merk dir als server wer deine hilfe braucht! ([...])
let helpClient = []

// array von clients haben die sich gemeldet haben

// hört auf deine kasse wenn die hilfe braucht
fastify.post('/help', async (request, reply)=>{
  
  console.log(request.body)

  helpClient.push(request.body)
  // welche kasse braucht hilfe?
	reply.send()
})

fastify.get('/help', (request, reply)=>{
  reply.send(helpClient)
}
)})


// dritter computer kann abfragen ob jemand hilfe braucht
// get("/customerInNeed" ) -> wer brauch grade hilfe?


// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()