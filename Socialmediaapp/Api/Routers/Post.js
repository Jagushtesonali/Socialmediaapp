import express from 'express'
import { createpost, deletepost, getallpost, getpost, likepost, updatepost } from '../Controllers/Post.js'
import { verifytoken } from '../Verifytoken.js'

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
router.get("/timeline/:id",getallpost)
router.put("/like/:id",verifytoken,likepost)


export default router