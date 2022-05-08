const otpService = require('../services/otpService');

const sendOtp = async(req, res) => {
    const name = req.body.name
    const phoneNumber = req.body.phone
    const response = await otpService.sendOtp(name, phoneNumber);
    res.status(200).json(response);

}

const verifyOtp = async(req, res) => {
    const pin = req.body.pin;
    const pinId = req.body.pinId;
    const response = await otpService.verifyOtp(pinId, pin);
    res.status(200).json(response);

}

const checkBalance = async(req, res) => {
    const response = await otpService.checkBalance();
    res.status(200).json(response);
}

module.exports = {
    sendOtp,
    verifyOtp,
    checkBalance
}