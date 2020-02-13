Mock any GraphQL schema. All you need is a `schema.json` or the URL of a GraphQL server that has introspection enabled. 

Steps:

- Update the schema to the one you want by either:
  - Replacing `schema.json`, or
  - Replacing `https://api.spacex.land/graphql` in `package.json` and running `npm run update-schema`
- Running `npm start`
- Opening [localhost:4000](http://localhost:4000) and querying with Playground

Mocking docs: https://www.apollographql.com/docs/apollo-server/testing/mocking/

![SpaceX query in Playground with mocked results](https://www.dropbox.com/s/333z463raj3bbic/Screenshot%202020-02-13%2001.36.49.png?raw=1)