'use strict';
import {gql} from 'apollo-server-express';

export default gql`
    extend type Query {
        currenttypes: [CurrentTypes]
    }
    
    type CurrentTypes {
        id: ID
        Description: String
        Title: String    
    }
    `
