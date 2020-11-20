const express = require('express');

const Todo = require('../../model/Todo');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;

router.get('/todo/get',(req,res)=>{
    Todo.find()
        .then(todos=>res.send(todos))
        .catch(err=>console.log(err));
})

router.get('/todo/get/:id',(req,res)=>{
    Todo.findOne({_id:ObjectId(req.params.id)})
        .then(todos=>res.send(todos))
        .catch(err=>console.log(err));
})

router.post('/todo/add',(req,res)=>{
    const {name} = req.body;
    console.log(req.body);
    
    const newTodo = new Todo({
        name:name
    })

    
    newTodo.save()
        .then(todo=> res.send(todo))
        .catch(err=>console.log(err));
    
        // res.send(newTodo);
})

router.put('/todo/changestatus/:id',(req,res)=>{
    const id = req.params.id;
    Todo.findOne({_id:ObjectId(id)})
        .then(e=>{
            Todo.updateOne({_id:ObjectId(id)},{isDone:!e.isDone})
                .then(todo=>res.send(todo))
                .catch(err=>console.log(err));
        })
        .catch(err=>console.log(err));
})

router.delete('/todo/delete/:id',(req,res)=>{
    const id = req.params.id;
    Todo.deleteOne({_id:ObjectId(id)})
        .then(e=>res.send('Deleted Succesfully'))
        .catch(err=>console.log(err));
})

module.exports = router;