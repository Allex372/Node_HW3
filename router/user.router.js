const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);

router.get('/:userId',
    userMiddleware.checkIsIdValid,
    userMiddleware.ifUserExists,
    userController.getSingleUser);

router.post('/', userMiddleware.isUserValid, userController.createUser);

router.delete('/:userId',
    userMiddleware.checkIsIdValid,
    userMiddleware.rewriteUserID,
    userController.deleteSingeUser);

module.exports = router;
