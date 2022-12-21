import express from 'express'
import { createpost, deletepost, getallpost, getpost, likepost, updatepost } from '../Controllers/Post.js'

const router = express.Router()

//createpost
router.post("/",createpost)
//deletepost
router.delete("/:id",deletepost)
//updatepost

router.put("/:id",updatepost)
//getpost
router.get("/:id",getpost)
//getallpost
router.get("/",getallpost)
router.put("/like/:id",likepost)


export default router