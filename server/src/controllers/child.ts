import express from 'express'
import {validationResult} from 'express-validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import child from '../models/child';
import course from '../models/course';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secretjwtstring"

const login = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body;
    try {
        let user = await child.findOne({ email: email })
        if (!user) return res.status(400).json({ error: "User with this email dosen't exists" })
        
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) return res.status(400).json({ error: "Login with correct credentials" })
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken, user });
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal server error");
    }
}

const signup= async(req: express.Request, res: express.Response)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { name, email, password } = req.body;
    try {
        let user = await child.findOne({ email: email })
        if (user) return res.status(400).json({ error: "User with this email already exists" })
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user = new child({
            name,
            email,
            password: hashedPassword,
        })
        await user.save();
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken, user });
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal server error");
    }

}

const getCourse = async(req: express.Request, res: express.Response)=>{
    try{
        const courses = await course.find()
        res.send({status:200, courses});
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Server error occured")
    }
}
const getPurchasedCourse = async(req: express.Request, res: express.Response)=>{
    try{
        const data=await child.findOne({email:req.body.email});
        
        res.send({status:200, data});


    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Server error occured")
    }
}

module.exports = {
    login,
    signup,
    getCourse
}