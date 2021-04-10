'use strict';
import connectionsResolver from './connectionResolver.js'
import connectionTypesResolver from './connectionTypesResolver.js'
import currentTypesResolver from './currentTypesResolver.js'
import levelsResolver from './levelsResolver.js'
import stationsResolver from './stationsResolver.js'
import userResolver from "./userResolver.js";

export default [
    connectionTypesResolver,
    connectionsResolver,
    currentTypesResolver,
    levelsResolver,
    stationsResolver,
    userResolver
];
