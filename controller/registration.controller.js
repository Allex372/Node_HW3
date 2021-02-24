const registrationService = require('../service/registration.service');
const errorCodes = require('../constant/errorCodes.enum');
const error = require('../error/error.messages');

module.exports = {
    showInfoRegistration: async (req, res)=>{
        try {
            const users = await registrationService.showAllUsers();

            res.json(users)
        }catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message)
        }
    },

    getSingleUserByName:async (req,res)=>{
        try {
            const userName = await registrationService.findUserByLogin(req.params);
            res.json(userName);
        }catch (e) {
            res.status(error.BAD_REQUEST).json(e.message)
        }

    },

    createUser:(req,res)=> {
        try {
            registrationService.createUser(req.body);
            // registrationService.findUserByLogin(req.body);
            res.status(201).json(error.USER_IS_CREATED)
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message)
        }
    }
}
