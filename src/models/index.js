// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Genre, Author, Book, Profile } = initSchema(schema);

export {
  Genre,
  Author,
  Book,
  Profile
};