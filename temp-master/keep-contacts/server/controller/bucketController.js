//Models
const Bucket =  require('../model/bucket')
const User = require('../model/user')


module.exports = {
    addbucket: async (req, res, next) => {
        try {
            let errors = {}
            const {_id} = req.user
            const { name} = req.body;
            const bucket = await Bucket.findOne({ name })
            if (bucket) {
                errors.bucket = "bucket already exist"
                return res.status(400).json(errors)
            }
            const newBucket = await new Bucket({
                name,
                user: _id
            })
            await newBucket.save()
            return res.status(201).json({success: true, 
                message: "New Bucket created successfully",
                response: newBucket
            })
        }
        catch (err) {
            console.log("Error in addBucket", err.message)
            return res.status(400).json({ message: `Error in addBucket ${err.message}` })
        }
    },
    getBuckets:async(req,res,next)=>{
        try{
            const {_id} = req.user
            const buckets = await Bucket.find({user:_id})
            return res.status(200).json({success: true, message:`${buckets.length} buckets found successfully`, response:buckets})
        }
        catch (err) {
            console.log("Error in getBuckets", err.message)
            return res.status(400).json({ message: `Error in getBuckets ${err.message}` })
        }
    },
    deleteBucket:async(req,res,next)=>{
        try{
            const {id} = req.params
            const bucket = await Bucket.findByIdAndDelete(id)
            if(!bucket){
                return  res.status(404).json({success: false, message:"Bucket not found", response:{}})
            }
            return res.status(200).json({success: true, message:"Bucket deleted successfully", response:bucket})
        }
        catch (err) {
            console.log("Error in deleteBucket", err.message)
            return res.status(400).json({ message: `Error in deleteBucket ${err.message}` })
        }
    },
    addTodo: async (req, res, next) => {
        try {
            const {id} = req.params
            const { title, isCompleted } = req.body;
            const bucket = await Bucket.findById(id)
            if(!bucket){
                return  res.status(404).json({message:"Bucket not found", success: false})
            }
            if(bucket.todos.length !== 0){
                const todo =  bucket.todos.find(obj=>obj.title === title)
                if(todo){
                    return res.status(409).json({message:"Todo already exist", success:false})
                }
            }
            bucket.todos.push({
                title,
                isCompleted
            })
            await bucket.save()
            return res.status(201).json({success: true, message:"New todo added successfully", response: bucket.todos})
        }
        catch (err) {
            console.log("Error in addTodo", err.message)
            return res.status(400).json({ message: `Error in addTodo ${err.message}` })
        }
    },
    getTodos: async(req,res,next)=>{
        try{
            const {id}  = req.params
            const bucket = await Bucket.findById(id)
            return res.status(200).json({message:`${bucket.todos.length} buckets found successfully`,
            success: true,
            response: bucket.todos})
        }
        catch(err){
            console.log("Error in addTodo", err.message)
            return res.status(400).json({ message: `Error in addTodo ${err.message}` })
        }
    },
    deleteTodo: async (req, res, next) => {
        try {
            const {id} = req.params
            const { title, isCompleted } = req.body;
            const bucket = await Bucket.findById(id)
            if(!bucket){
                return  res.status(404).json({message:"Bucket not found", success: false})
            }
            bucket.todos.pull({
                title
            })
            await bucket.save()
            return res.status(201).json({success: true, message:"Todo deleted successfully", response: bucket.todos})
        }
        catch (err) {
            console.log("Error in deleteTodo", err.message)
            return res.status(400).json({ message: `Error in deleteTodo ${err.message}` })
        }
    },
    updateTodo: async (req, res, next) => {
        try {
            const {id} = req.params
            const { title, isCompleted } = req.body;
            const bucket = await Bucket.findById(id)
            if(!bucket){
                return  res.status(404).json({message:"Bucket not found", success: false})
            }
            if(bucket.todos.length !== 0){
                const todo =  bucket.todos.find(obj=>obj.title === title)
                if(todo){
                    return res.status(409).json({message:"Todo already exist", success:false})
                }
            }
            bucket.todos.push({
                title,
                isCompleted
            })
            await bucket.save()
            return res.status(201).json({success: true, message:"New todo added successfully", response: bucket.todos})
        }
        catch (err) {
            console.log("Error in addTodo", err.message)
            return res.status(400).json({ message: `Error in addTodo ${err.message}` })
        }
    },
    
}


