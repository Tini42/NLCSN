const User = require('../models/user.model.js');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
    const {username, password, name} = req.body;
    try {
        const isExist = await User.findOne({username});
        if(isExist) {
            return res.status(409).json('Username already exists');
        }

        const saltRounds = 10;
        const pwdHashed = await bcrypt.hash(password, saltRounds);

        const user = await User.create({
            username,
            password: pwdHashed,
            name
        });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const signin = async(req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.findOne({
            username
        });

        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) {
            return res.status(401).json('Wrong password');
        }
        
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    signup,
    signin
}