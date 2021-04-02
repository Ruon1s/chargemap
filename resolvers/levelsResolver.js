'use strict';
import Level from "../models/Levels.js";

export default {
    Query: {
        leveltypes: () => {
            return Level.find();
        }
    },
    Connection: {
        LevelID(parent)  {
          //  console.log('level parent', parent);
            return Level.findById(parent.LevelID);
        }
    }
}
