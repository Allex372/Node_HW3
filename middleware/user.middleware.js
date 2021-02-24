const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../error/error.messages');
const { findUserById } = require('../service/user.service');
const { deleteUser } = require('../service/user.service')


module.exports = {
    checkIsIdValid : (req, res, next)=>{
        try {
            const {language = 'en'} = req.body;
            const userId = +req.params.userId;

            if(userId< 0 || !Number.isInteger(userId) || Number.isNaN(userId)){
                throw new Error(errorMessages.NOT_VALID_ID[language]);
            }

            next();
        }catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    rewriteUserID: async (req, res, next) => {
        try {
            const { language = 'ua' } = req.body;
            const { userId } = req.params;
            const foundUser = await deleteUser(+userId);

            req.user = foundUser;

            next()
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    ifUserExists: async (req, res, next) => {
        try {
            const { language = 'ua' } = req.body;
            const { userId } = req.params;
            const foundUser = await findUserById(+userId);
            if (!foundUser) {
                throw new Error(errorMessages.USER_NOT_FOUND[language]);
            }

            req.user = foundUser;

            next()
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    isUserValid:(req,res,next)=>{
        try {
            const {name, password, language = 'en'} = req.body;

            if (!name || !password){
                throw new Error(errorMessages.SOME_FIELD_IS_EMPTY[language]);
            }

            if (password.length < 6){
                throw new Error(errorMessages.TOO_SMALL_PASSWORD[language]);
            }

            next();
        }catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
}
