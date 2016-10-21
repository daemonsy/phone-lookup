import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import PhoneNumberType from "./types/phone-number-type.js";
import PhoneNumber from "../models/phone-number.js";


export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      parse_phone_number: {
        type: PhoneNumberType,
        args: {
          number: {
            name: 'number',
            type: new GraphQLNonNull(GraphQLString)
          }
        },

        resolve(obj, args, ctx) {
          return new PhoneNumber(args.number);
        }
      }
    }
  })
});
