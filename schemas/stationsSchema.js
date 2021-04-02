'use strict';
import {gql} from 'apollo-server-express';


export default gql`
    extend type Query {
    stations(start: Int, limit: Int, bounds: Bounds): [Station],
    station(id: ID!): Station
    }
    
    type Station {
        id: ID
        Location: Location
        Connections: [Connection]
        Title: String
        AddressLine1: String
        Town: String
        StateOrProvince: String
        Postcode: String
    }
    
    input Bounds {
    _southWest: Coords
    _northEast: Coords
    }
    
    input Coords {
        lat: Float
        lng: Float
    }
    
    type Location {
        type: String
        coordinates: [Float]
    }
    
    input Connections {
        id: ID
        ConnectionTypeID: String
        LevelID: String
        CurrentTypeID: String
        Quantity: Int
    }
    
    input newLocation {
        coordinates: [Float]
    }
    
    extend type Mutation {
    addStation(
    Connections: [Connections]
    Postcode: String
    Title: String
    AddressLine1: String
    StateOrProvince: String
    Town: String
    Location: newLocation
    ): Station
    }
    
`
