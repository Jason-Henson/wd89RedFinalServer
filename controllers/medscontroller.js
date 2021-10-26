const express = require("express");
const router = express.Router();
const { Meds } = require("../models");
const validateSession = require("../middleware/validate-session");
const { restore } = require("../models/user");

/****************
 * Family Get All
 ****************/

router.get("/all/" ,validateSession, async function (req, res) {
    try{
        let medsAll = await Meds.findAll({where: {userId: req.user.id}})    
        res.status(200).json(medsAll)
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Add
 ****************/

router.post("/add/" ,validateSession, async function (req, res) {
    try{
        let medAdd = {
            medName: req.body.meds.medName, 
            medScript: req.body.meds.medScript,
            medDesc: req.body.meds.medDesc,
            medActive: req.body.meds.medActive,
            medNotes: req.body.meds.medNotes,
            userId: req.user.id,
        }
        Meds.create(medAdd)
        res.status(200).json(medAdd)
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Update
 ****************/

router.put("/:id" ,validateSession, async function (req, res) {
    try{
        let medUpdate = {
            medName: req.body.meds.medName, 
            medScript: req.body.meds.medScript,
            medDesc: req.body.meds.medDesc,
            medActive: req.body.meds.medActive,
            medNotes: req.body.meds.medNotes,
            userId: req.user.id,
        }
        const query = { where: { id: req.params.id } };
        Meds.update(medUpdate, query)
        res.status(200).json(medUpdate)
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Delete
 ****************/

router.delete("/:id" ,validateSession, async function (req, res) {
    try{
        const query = await Meds.destroy({ where: { id: req.params.id, userId: req.user.id}})
        res.status(200).json(query)
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

module.exports = router; 