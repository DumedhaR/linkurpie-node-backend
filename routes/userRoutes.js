import express from "express";
import * as authCon from "../controller/authController.js";

const router = express.Router();

router.route("/signup").post(authCon.signUp);
router.route("/login").post(authCon.logIn);
router.route("/logout").post(authCon.logOut);

export default router;
