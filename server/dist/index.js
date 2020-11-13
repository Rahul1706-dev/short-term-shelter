"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typedefs_1 = __importDefault(require("./graphql/typedefs"));
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const User_1 = require("./entity/User");
const Listing_1 = require("./entity/Listing");
const Booking_1 = require("./entity/Booking");
const app = express_1.default();
const mount = (app) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield typeorm_1.createConnection();
        console.log("connected to database");
        const userRepo = typeorm_1.getCustomRepository(User_1.User);
        const listingRepo = typeorm_1.getCustomRepository(Listing_1.Listing);
        const bookingRepo = typeorm_1.getCustomRepository(Booking_1.Booking);
        const server = new apollo_server_express_1.ApolloServer({
            typeDefs: typedefs_1.default,
            resolvers: resolvers_1.default,
            context: () => {
                return {
                    userRepo,
                    listingRepo,
                    bookingRepo,
                };
            },
        });
        server.applyMiddleware({ app, path: "/api" });
        app.listen("4000", () => {
            console.log(`http://localhost:4000/api`);
        });
    }
    catch (error) {
        console.error(error);
    }
});
mount(app);
//# sourceMappingURL=index.js.map