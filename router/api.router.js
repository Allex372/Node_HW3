const router = require('express').Router();

const userRouter = require('./user.router');
const authRouter = require('./auth.router');
const registrationRouter = require('./registration.router')

router.use('/users', userRouter);

router.use('/registration', registrationRouter);

router.use('/auth', authRouter);



module.exports = router;
