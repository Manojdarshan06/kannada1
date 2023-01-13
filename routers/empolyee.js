const express = require('express')
const Employee = require("../model/Employee")
const router = new express.Router

router.post("/employee", async(req,res)=>{
    try{
        const addEmployee = new Employee(req.body)
        console.log(`Added ${req.body.name}`)
        const saveEmployee = await addEmployee.save()
        res.status(201).send(`Added ${req.body.name}`)
    }
    catch(e){
        res.status(400).send(e)
    }
})
router.get("/employee",async (req,res)=>{
    try{
        const getEmployee = await Employee.find({});
        res.send(getEmployee)
    }
    catch(e){
        res.status(400).send(e)        
    }
})
router.get("/empolyee/:id",async (req,res)=>{
    try{
        const _id = req.varams.id;
        const getEmployee = await Employee.findById({_id});
        res.send(getEmployee)
    }
    catch(e){
        res.status(400).send(e)
    }
})
module.exports = router
