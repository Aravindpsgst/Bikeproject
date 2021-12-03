var express = require('express');
var router = express.Router();
var userServices = require('../services/userService');
var appLogger = require('../logging/appLogger');

//routes

router.get('/getuserDetails', function (req, res, next) {
    userServices.getAllUserDetails(function (err, details) {
        if (!err) {
            appLogger.info("user details retrived");
            res.send(details);
        }
        else {
            appLogger.error({ err: err }, "Error while trying to retrieve user details");
            res.status(500).send({ error: err.name, message: err.message });
        }
    });
});

router.post('/adduser', function (req, res, next) {
    userServices.addUser(req.body,function (err, response) {
        if (!err) {
            appLogger.info("user details successfully saved");
            res.send(response);
        }
        else {
            appLogger.error({ err: err }, "Error while saving user details");
            res.status(500).send({ error: err.name, message: err.message });
        }
    });
});

module.exports = router;