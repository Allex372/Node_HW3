const router = require('express').Router();

const registrationController = require('../controller/registration.controller');
const registrationMiddleware = require('../middleware/registration.middleware');

router.get('/',
    registrationController.showInfoRegistration);

router.post('/',
    registrationMiddleware.findUserByLogin,
    registrationController.createUser);

router.get('/:name',
    registrationController.getSingleUserByName)





module.exports = router;
