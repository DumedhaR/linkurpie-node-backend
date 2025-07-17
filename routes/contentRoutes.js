import express from "express";
import * as contentCon from "../controller/contentController.js";

const router = express.Router();

router.route("/").post(contentCon.createContent);
router
  .route("/:id")
  .get(contentCon.getContent)
  .patch(contentCon.updateContent)
  .delete(contentCon.deleteContent);

export default router;
