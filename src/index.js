import express from 'express';
import graphqlHTTP from 'express-graphql';
import Schema from "./graphql/schema.js";

const port = process.env.PORT || 4000;
const app = express();

app.use('/graph', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

app.listen(port, (error, results) => {
  console.log(`Ready for requests on port ${port}`);
});
