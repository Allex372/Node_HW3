const userService = require('../service/user.service')
const error = require('../constant/errorCodes.enum')

module.exports = {
    getAllUsers: async (req,res)=>{
        try {
            const users = await userService.findUsers();

            res.json(users);
        }catch (e) {
            res.status(error.BAD_REQUEST).json(e.message)
        }
    },

    getSingleUser:(req,res)=>{
        try {
            // console.log(req.user)
            res.json(req.user);
        }catch (e) {
            res.status(error.BAD_REQUEST).json(e.message)
        }

    },

    createUser:(req,res)=>{
        try {
            userService.createUser(req.body);

            res.status(201).json('CreateUsers');
        }catch (e) {
            res.status(error.BAD_REQUEST).json(e.message)
        }

    }

}
