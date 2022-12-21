import express from 'express'
import { deleteuser, followuser, getuser, updateuser } from '../Controllers/User.js'
import { verifytoken } from '../Verifytoken.js'

const router = express.Router()
//updateuser
router.put("/:id",verifytoken,updateuser)


//get user
router.get("/:id",getuser)

//delete user
router.delete("/:id",verifytoken,deleteuser)


//follow user
router.put("/follow/:id",verifytoken,followuser)
//unfollow user

//like post





export default router