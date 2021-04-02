'use strict';
import {gql} from 'apollo-server-express';

export default gql`
    type Connection {
        id: ID
        ConnectionTypeID: ConnectionTypes
        LevelID: Level
        CurrentTypeID: CurrentTypes
        Quantity: Int
    }
    
    `
