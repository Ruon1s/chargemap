'use strict';
import ConnectionType from "../models/ConnectionTypes.js";

export default {
    Query: {
        connectiontypes: () => {
            return ConnectionType.find();
        }
    },
    Connection: {
        ConnectionTypeID(parent)  {
          //  console.log(parent);
            return ConnectionType.findById(parent.ConnectionTypeID);
        }
    }
}

