'use strict';
import Connections from "../models/Connections.js";

export default {
    Station: {
        Connections(parent)  {
          //  console.log('connections parent', parent.Connections);
           const stuff = parent.Connections.map(id => Connections.findById(id))
           // console.log('stuff' + stuff);
            return stuff;
        }
    }
}
