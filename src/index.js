import express from 'express';
import graphqlHTTP from 'express-graphql';
import throng from "throng";
import Schema from "./graphql/schema.js";

const port = process.env.PORT || 4000;
const workers = process.env.WEB_CONCURRENCY || 1;
const app = express();

app.use('/graph', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

const start = (id) => {
  app.listen(port, (error, results) => {
    console.log(`Ready for requests for worker ${id} on port ${port}`);
  });
};

throng(workers, start);

