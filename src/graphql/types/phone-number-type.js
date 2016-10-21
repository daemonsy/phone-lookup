import {
  graphql,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: "PhoneNumber",
  fields() {
    return {
      internationalFormat: {
        type: new GraphQLNonNull(GraphQLString)
      }
    }
  }
})
