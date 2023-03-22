import express from "express";
import { getAll,get,post,deleteuser,update,updateput } from "../controllers/user.js";
const router = express.Router();

router.get("/users",getAll);
router.get("/users/:id",get);
router.post("/users",post);
router.delete("/users/:id",deleteuser);
router.patch("/users/:id",update);
router.put("/users/:id",updateput);

export default router
