import jwt  from "jsonwebtoken";
import User from "../models/user.model.js";
import 'dotenv/config'

const authMiddleware = async(req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try{
            token = req.headers.authorization.split(' ',[1]);

            console.log('Token received for verification:', token);
            console.log('Secret used for verifying:', process.env.JWT_SECRET);

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.user.id0).select('-password');
            next();

        } catch(error){
            console.error(error)
        res.status(401).json({message: " not authorized, token failed"})
        }
    }
    if (!token){
        res.status(401).json({message: 'not authorized - no token lol'})
    }
}

export default authMiddleware