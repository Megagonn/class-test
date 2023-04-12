const getSignUp =(req,res)=>{
    res.render('form.ejs', {status:"empty", message:'' });
}

const getSignIn = (req,res)=>{
    res.render('signin.ejs',{status:"empty", message:'' });
}

module.exports = {getSignUp, getSignIn}