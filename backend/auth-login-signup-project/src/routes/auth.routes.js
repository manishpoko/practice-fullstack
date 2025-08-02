import express from "express"
import { registerUser, loginUser } from "../controllers/auth.controller.js"

const myRouter = express.Router()

myRouter.post("/register", registerUser)
myRouter.post("/login", loginUser)

export default myRouter