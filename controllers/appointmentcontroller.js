const express = require("express");
const router = express.Router();
const { Appointment } = require("../models");
const { User } = require("../models")
const validateSession = require("../middleware/validate-session");

/*******************
 * Appointment Get All
 *******************/

router.get("/all/" ,validateSession, async(req, res) => {
    let query;

    if(req.user.role){
        query = ""
    } else {
        query = "{where: {userId: req.user.id}}"
    }

    try{
        let appAll = await Appointment.findAll({where: {userId: req.user.id}})
        res.status(200).json(appAll)      
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/*******************
 * Appointment Add
 *******************/

router.post("/add" ,validateSession, async function (req, res) {
    try{
        let appAdd = await {
            appFor: req.body.appointment.appFor,
            appDate: req.body.appointment.appDate,
            appTime: req.body.appointment.appTime, 
            appLoc: req.body.appointment.appLoc,
            appDoc: req.body.appointment.appDoc,
            appNotes: req.body.appointment.appNotes,
            userId: req.user.id,
        };

        appAddResult(appAdd)
        function appAddResult() {
            Appointment.create(appAdd)
            res.status(200).json(appAdd)
        }
        
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/*******************
 * Appointment Update
 *******************/

router.put("/:id" ,validateSession, async function (req, res) {
    try{
        let appUpdate = {
            appFor: req.body.appointment.appFor,
            appDate: req.body.appointment.appDate,
            appTime: req.body.appointment.appTime, 
            appLoc: req.body.appointment.appLoc,
            appDoc: req.body.appointment.appDoc,
            appNotes: req.body.appointment.appNotes,
        }
        let query = { where: { id: req.params.id } };
        Appointment.update(appUpdate, query)
            res.status(200).json(appUpdate)       
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/*******************
 * Appointment Delete
 *******************/

router.delete("/:id" ,validateSession, async function (req, res) {
    try{
        let query = await Appointment.destroy({ where: { id: req.params.id, userId: req.user.id}})
        res.status(200).json(query)
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

module.exports = router;
