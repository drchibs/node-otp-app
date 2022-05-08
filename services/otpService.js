const Termii = require("termii-nodejs").Termii;


const sender_id = process.env.SENDER_ID;
const api_key = process.env.API_KEY;

const termii = new Termii({
	api_key: api_key,
	sender_id: sender_id,
});

const sendOtp = (name, phoneNumber) => {
    const pinPlaceholder = '< 1234 >';
    const message = `Hello ${name}, your OTP is ${pinPlaceholder}. This pin will expire in 1 minute.`;

    try{
        const response = termii.sendToken(phoneNumber, pinPlaceholder, message);
        return response;
    }
    catch(err){
        throw err;
    }
}

const verifyOtp = (pindId, pin) => {
    try{
        const response = termii.verifyToken(pindId, pin);
        return response;
    }
    catch(err){
        throw err;
    }
   
}

const checkBalance = () => {
    try{
        const response = termii.getBalance();
        return response;
    }
    catch(err){
        throw err;
    }
}

// const checkBalanceWithFetch = async() => {
//     try{
//         const response = fetch(`https://api.ng.termii.com/api/get-balance?api_key=${process.env.API_KEY}`);
//         return response;
//     }
//     catch(err){
//         throw err;
//     }
// }

module.exports ={
    sendOtp,
    verifyOtp,
    checkBalance,
}