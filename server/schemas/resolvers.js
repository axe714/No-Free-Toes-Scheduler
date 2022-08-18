const { NormalUser,
    ServiceUser,
    ServiceCategory,
    ServiceComment,
    ServiceType } = require('../models');

const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');



const resolvers = {
    Query: {
        // GET ALL NORMAL USERS
        normalUsers: async () => {
            return await NormalUser.find();
        },
        // // GET ALL SERVICE USERS
        // serviceUsers: async () => {
        //     return await ServiceUser.find();
        // },
        //  GET ALL SERVICE USERS + CATEGORIES
        serviceUsers: async () => {
            return await ServiceUser.find({}).populate('serviceCategory');
        },
        //  GET ALL SERVICECATEGORIES
        serviceCategories: async () => {
            return await ServiceCategory.find({});
        },
    }
}


module.exports = resolvers;
