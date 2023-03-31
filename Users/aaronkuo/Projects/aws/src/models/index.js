// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Tracker } = initSchema(schema);

export {
  User,
  Tracker
};