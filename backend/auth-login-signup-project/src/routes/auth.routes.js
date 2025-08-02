import express from "express"
import { registerUser, loginUser, getMe } from "../controllers/auth.controller.js"
import authMiddleware from "../middleware/auth.middleware.js"

const myRouter = express.Router()

myRouter.post("/register", registerUser)
myRouter.post("/login", loginUser)
myRouter.get("/me", authMiddleware, getMe)

export default myRouter