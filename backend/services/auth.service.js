const User = require('../models/user.model')
const bcrypt = require('bcrypt');

const userService = {
    signup: async (username, password) => {
        const user = await User.findOne({ username: username});
        
        if(user) return null;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const createdUser = await User.create({
            username,
            password: hash
        });

        return createdUser;
    },
    signin: async (username, password) => {
        const user = await User.findOne({ username: username});

        if(user === null || bcrypt.compareSync(user.password, password)) return null;

        return user;
    }
}

module.exports = userService;