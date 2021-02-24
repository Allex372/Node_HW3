const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');
const userService = require('../service/user.service');

router.get('/',userController.getAllUsers);

router.get('/:userId',
    userMiddleware.checkIsIdValid,
    userMiddleware.ifUserExists,
    userController.getSingleUser);

router.post('/',userMiddleware.isUserValid, userController.createUser);

router.delete('/:userId',
    userMiddleware.checkIsIdValid,
    // userMiddleware.ifUserExists,
    userMiddleware.rewriteUserID,
    userController.deleteSingeUser);

module.exports = router;
