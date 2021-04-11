'use strict';

import {ApolloServer} from 'apollo-server-express';
import schemas from './schemas/index.js';
import resolvers from './resolvers/index.js';
import express from 'express';
import connectDB from './database/db.js'
import dotenv from 'dotenv';
import {checkAuth} from "./passport/authenticate.js";
import helmet from 'helmet';
import cors from 'cors';
import localhost from './host/localhost.js'
import remote from './host/remote.js'

dotenv.config();

(async () => {
    try {
        const con = await connectDB();
        if (con) {
            console.log('connection to db succesful');
        }
        const server = new ApolloServer({
            typeDefs: schemas,
            resolvers: resolvers,
            context: async ({req, res}) => {
                try {
                    const user = await checkAuth(req, res);
                    return {req, res, user};
                } catch (error) {
                    console.log('context error:', error);
                }
            }
        });
        const app = express();
        app.use(helmet({
            ieNoOpen: false
        }));
        app.use(cors());
        process.env.NODE_ENV = process.env.NODE_ENV || 'development';
        if (process.env.NODE_ENV === 'production') {
            remote(app, 3000);
        } else {
            localhost(app, 8000, 3000);
        }
        server.applyMiddleware({app});
    } catch (e) {
        console.log('server error: ' + e.message);
    }
})();
