'use strict';
import connectionsSchema from './connectionSchema.js'
import connectionTypesSchema from './connectionTypesSchema.js'
import currentTypesSchema from './currentTypesSchema.js'
import levelsSchema from './levelsSchema.js'
import stationsSchema from './stationsSchema.js'
import userSchema from "./userSchema.js";
import {gql} from 'apollo-server-express';


const linkSchema = gql`
   type Query {
     _: Boolean
   }
   type Mutation {
     _: Boolean
   }
`;

export default [
    linkSchema,
    connectionTypesSchema,
    connectionsSchema,
    currentTypesSchema,
    levelsSchema,
    stationsSchema,
    userSchema

];
