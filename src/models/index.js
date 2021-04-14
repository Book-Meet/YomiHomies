// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Genres, Authors, Books, Profiles, Todo } = initSchema(schema);

export {
  Genres,
  Authors,
  Books,
  Profiles,
  Todo
};