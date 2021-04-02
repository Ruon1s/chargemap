'use strict';
import {gql} from 'apollo-server-express';

export default gql`
    extend type Query {
        connectiontypes: [ConnectionTypes]
    }
    
    type ConnectionTypes {
         id: ID
         FormalName: String
         Title: String
    }
    `
