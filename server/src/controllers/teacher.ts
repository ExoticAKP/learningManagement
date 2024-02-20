import express from 'express'
import Child from '../models/child'
import Course from '../models/course'
import {ValidationError, validationResult} from 'express-validator'
import Teacher from '../models/teacher'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();


const JWT_SECRET = process.env.JWT_SECRET as string;


export const signup = async (req: express.Request, res: express.Response) => {
    const errors:any = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        let checkUser:any = await Teacher.findOne({ email: req.body.email })
        if (checkUser) return res.status(400).json({ error: "Teacher with this email already exists" })
        const salt:string = await bcrypt.genSalt(10);
        const { name, email, password } = req.body;
        const secPass:string = await bcrypt.hash(password, salt)
        let teacher:any = new Teacher({ name, email, password: secPass });
        teacher = await teacher.save()
        const data = {
            child: {
                id: teacher.id,
            }
        }
        const authToken:string = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Internal server error");
    }
}

export const createCourse = async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
    try {
        const { title, category, price, description } = req.body;
        let course = new Course({ title, category, price, description});
        await course.save()
            .then(() => {
                return res.status(200).send("Homework added successfully")
            }).catch((err: any) => {
                console.log(err)
            })
        const data = {
            course: {
                id: course.id
            }
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const login=async(req: express.Request, res: express.Response)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body;
    try {
        let user = await Teacher.findOne({ email: email })
        if (!user) return res.status(400).json({ error: "User with this email dosen't exists" })
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) return res.status(400).json({ error: "Loggin with correct credentials" })
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

module.exports = {
    createCourse,
    signup,
    login
}