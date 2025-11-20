import express from "express";
import { createANote, deleteANote, getAllNotes, updateANote } from "../controllers/notesController.js";

const router = express.Router();

//GET
router.get("/", getAllNotes);
//Create
router.post("/", createANote);
//Update
router.put("/:id", updateANote);
//Delete
router.delete("/:id", deleteANote);




export default router