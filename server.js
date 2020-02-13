const { buildClientSchema } = require('graphql')
const introspectionResult = require('./schema.json')
const { ApolloServer } = require('apollo-server')

const schema = buildClientSchema(introspectionResult.data)

const server = new ApolloServer({
  schema,
  mocks: true
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
