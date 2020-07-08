;
'use strict'

const express = require('express'),
    { makeExecutableSchema } = require('graphql-tools'), 
    { graphqlHTTP } = require('express-graphql'),
    { join } = require('path'),
    { readFileSync } = require('fs'),
    pruebaResolver = require('./resolvers/prueba.resolvers'),
    cursoResolver = require('./resolvers/curso.resolvers')
    port = 4000

let app = express()

const typeDefs = readFileSync(join(__dirname, 'schemas', 'schema.graphql'), 'utf-8')

const schema = makeExecutableSchema({ typeDefs, resolvers: [pruebaResolver, cursoResolver] })

app.use('/gql', graphqlHTTP({
    schema: schema,
    rootValue: cursoResolver,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`El servidor funciona en http:localhost:${port}`)
})