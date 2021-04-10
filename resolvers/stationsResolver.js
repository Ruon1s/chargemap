'use strict';
import Stations from "../models/Stations.js";
import rectangleBounds from '../utils/rectangleBounds.js'
import Connections from "../models/Connections.js";
import {AuthenticationError} from "apollo-server-errors";


export default {
    Query: {
        stations: (parent, args) => {
            if (args.bounds !== undefined) {
                const box = rectangleBounds(args.bounds._northEast, args.bounds._southWest);
                console.log('box', box.coordinates);
                return Stations.find().where('Location').within(box)
            }

            if (args.limit === undefined) {
                if (args.start === undefined) {
                    args.start = 0
                }
                args.limit = 10;
                console.log(args.limit);
                return Stations.find({}).limit(args.limit).skip(args.start);
            } else {
                if (args.start === undefined) {
                    args.start = 0;
                }
                return Stations.find({}).limit(args.limit).skip(args.start)
            }


        },
        station: (parent, args) => {
            return Stations.findById(args.id)
        }
    },
    Mutation: {
        deleteStation: (parent, args, {user}) => {
            if(!user) {
                throw new AuthenticationError('You have not logged in')
            }
          Stations.findByIdAndDelete(args.id);
        },
        addStation: async (parent, args, {user}) => {
            if(!user) {
                throw new AuthenticationError('You have not logged in')
            }
            try {
                console.log(args.Connections);
                const connections = args.Connections;
                const newConnections = await Promise.all(connections.map(async conn => {
                    let newConnection = new Connections(conn);
                    const result = await newConnection.save();
                    return result._id;
                }));
                console.log('newconnections' + newConnections);
                const station = args;
                station.Connections = newConnections;
                station.Location.type = 'Point';
                const newStation = new Stations(station);
                const rslt = await newStation.save();
                return rslt;
            } catch (e) {
                console.log(e)
            }
        }
    },
}
