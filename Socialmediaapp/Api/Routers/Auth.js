import express from 'express'
import cookieParser from 'cookie-parser'
import { login, register } from '../Controllers/Auth.js'




const router = express.Router()

router.use(cookieParser())

router.post("/register",register)
router.post("/login",login)
export default router

