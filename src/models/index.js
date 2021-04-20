// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Genre, Author, Book, Profile, Match } = initSchema(schema);

export {
  Genre,
  Author,
  Book,
  Profile,
  Match
};