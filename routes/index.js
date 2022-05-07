var express = require('express');
var router = express.Router();
const otp = require('../controllers/otpController');

router.post('/signup', otp.sendOtp);
router.post('/verify', otp.verifyOtp);
router.get('/balance', otp.checkBalance);

module.exports = router;
