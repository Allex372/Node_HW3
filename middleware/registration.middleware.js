const errorCodes = require('../constant/errorCodes.enum');
const { findUserByLogin } = require('../service/registration.service');
const error = require('../error/error.messages')

module.exports ={
    findUserByLogin: async (req, res, next) => {
        try {
            const { info, language='en' } = req.body;
            const foundUser = await findUserByLogin(info);
            if (foundUser) {
                throw new Error(error.USER_ALREADY_EXISTED[language]);
            }

            // req.user = foundUser;

            next()
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
}
