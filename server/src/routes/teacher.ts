import express from 'express'
import { login, signup, createCourse } from '../controllers/teacher';
const verifyTeacher = require('../middlewares/verifyteacher');
import { body } from 'express-validator';
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET ;

router.post('/signup', [
    body('name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 5 })
], signup);



router.post('/createCourse', [
    body('title', 'Enter a valid Question').isLength({ min: 3 }),
    body('category', 'Enter a valid category').isLength({ min: 5 }),
    body('price').isNumeric(),
    body('description').isLength({ min: 10 })
], verifyTeacher, createCourse)

router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 5 })
], login)


module.exports = router