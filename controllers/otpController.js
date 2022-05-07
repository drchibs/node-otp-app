const otpService = require('../services/otpService');

const sendOtp = async(req, res) => {
    const phoneNumber = req.params.phone
    const response = otpService.sendOtp(phoneNumber);
    res.status(200).json(response);

}

const verifyOtp = async(req, res) => {
    const pin = req.body.pin;
    const pinId = "c8dcd048-5e7f-4347-8c89-4470c3af0b";
    const response = otpService.verifyOtp(pinId, pin);
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