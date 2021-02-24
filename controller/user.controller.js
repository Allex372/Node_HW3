const userService = require('../service/user.service');
const error = require('../constant/errorCodes.enum');
const errorMessage = require('../error/error.messages');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            let query = req.query;
            const users = await userService.findUsers(query);

            res.json(users);
        } catch (e) {
            res.status(error.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: (req, res) => {
        try {
            res.json(req.user);
        } catch (e) {
            res.status(error.BAD_REQUEST).json(e.message);
        }
    },

    deleteSingeUser: (req, res) => {
        try {
            userService.deleteUser(req.params);

            res.status(201).json(errorMessage.USER_WAS_DELETED["ua"]);
        } catch (e) {
            res.status(error.BAD_REQUEST).json(e.message);

        }
    },

    createUser: (req, res) => {
        try {
            userService.createUser(req.body);

            res.status(201).json('CreateUsers');
        } catch (e) {
            res.status(error.BAD_REQUEST).json(e.message);
        }
    }
}
