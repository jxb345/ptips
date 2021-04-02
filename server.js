const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-postgres'), {
  connectionString: 'postgres://postgres@localhost/postgres'
})

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world'})
})

fastify.listen(5000, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})