const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    pword:String
});
let saltRound = 10;
userSchema.pre('save', (next)=>{
    const document = this;
    bcrypt.hash(this.pword, saltRound, (err, hashedPassword)=>{
        if(!err){
            document.pword = hashedPassword;
            next();
        } else {
            console.log(err);
        }
    })
})
userSchema.methods.validator = (password, callback)=>{
    const document = this;
    bcrypt.compare(password, document.password, (err, same)=>{
        if (!err) {
            callback(err, same);
        } else {
            next();
        }
    })
}
let userModel = mongoose.model('users_tb', userSchema);

module.exports = userModel;