import { Router } from "express";
import { login, registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middlewares.js";
import { userRegisterValidator } from "../validators/index.js";
import { userLoginValidator } from "../validators/index.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);

export default router;
