const express = require('express')
const router = express.Router()
const passport = require('passport')


const { userLogin, userRegister} = require('../controller/userController')

const {addbucket, deleteBucket, getBuckets, addTodo, getTodos}  =  require('../controller/bucketController')


//USER REGISTER
router.post('/user/register', userRegister)

// USER LOGIN
router.post('/user/login', userLogin)

//ADD BUCKET
router.post('/bucket', passport.authenticate('jwt', { session: false }), addbucket)

//GET BUCKETS
router.get('/bucket', passport.authenticate('jwt', { session: false }), getBuckets)

//GET BUCKETS
router.get('/bucket/:id', passport.authenticate('jwt', { session: false }), getTodos)

//DELETE  BUCKET
router.delete('/bucket/:id', passport.authenticate('jwt', { session: false }), deleteBucket)

//ADD TODO
router.post('/todo/:id',passport.authenticate('jwt', { session: false }), addTodo)



module.exports = router