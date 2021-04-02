'use strict';
import CurrentType from "../models/CurrentType.js";
export default {
    Query: {
        currenttypes: () => {
            return CurrentType.find();
        }
    },
    Connection: {
        CurrentTypeID(parent)  {
          //  console.log('currentTypeID parent', parent);
            return CurrentType.findById(parent.CurrentTypeID);
        }
    }
}
