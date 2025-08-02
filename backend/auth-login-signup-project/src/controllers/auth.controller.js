
import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const registerUser = async(req, res)=> {

    try {
        const {name, email, password} = req.body

        const existingUser = await User.findOne({email})
        if(existingUser) {
            res.status(409).json({message: "user already exists"})
        }
        //bcrypt implementation logic from here-
        const salt = await bcrypt.genSalt(10)
        const hashedPwd = await bcrypt.hash(password, salt)

        //now create new user using the hashedPwd-
        const newUser = await User.create({name, email, password: hashedPwd})
        res.status(200).json({message: "new user registered", data: newUser})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "cannot register new user"})
    }
}

export const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user) {
            return res.status(409).json({message: "invalid email"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(409).json({message: " invalid password"})
        }

        const payLoad = {
            user: {
                id: user.id
            }    
        }
        jwt.sign(
            payLoad,
            process.env.JWT_SECRET,
            {expiresIn: "1h"},
            (err, token) => {
                if(err) throw err;
                res.status(200).json({token});
            }
    

        );
   
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "server error during login"})
    }
    
}