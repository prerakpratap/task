const limitter = require('express-rate-limit');


const loginLimitter =limitter({
    windowMs:1*60*1000,
    max:2,
    message:{
        responseCode:429,
        responseMessage:"Too many request try after some time"
    }
})

const signupLimitter = limitter({
    windowMs:5*60*1000,
    max:2,
    message:{
        responseCode:429,
        responseMessage:"Too many request try after some time"
    }
})



module.exports={
    loginLimitter,
    signupLimitter,
}