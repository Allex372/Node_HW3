const router = require('express').Router();
const authService = require('../service/auth.service')

module.exports = {
    isUserCreated: (req, res) => {
        try {
            const user = authService.findUser()
                res.json(user)
        } catch (e) {
            res.status(400).json(e.message)

        }
    }
}
