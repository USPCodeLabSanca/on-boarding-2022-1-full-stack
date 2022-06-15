const authService = require('../services/auth.service')

const authController = {
    signup: async (request, response) => {
        const username = request.body.username;
        const password = request.body.password;

        const createdUser = await authService.signup(username, password)

        if(!createdUser) return response.status(400).json();

        return response.json(createdUser)
    },
    signin: async (request, response) => {
        const username = request.body.username;
        const password = request.body.password;

        const User = await authService.signin(username, password)
        
        if(!User){
            response.status(401).json();
            console.log(`Passou por aqui!`)
            return;
        }
        return response.json(User)
    }
}

module.exports = authController;