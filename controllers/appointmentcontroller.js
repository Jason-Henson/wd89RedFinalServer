const{ Router } = require("express");
const { Appointment } = require("../models/appointment");
const validateSession = require("../middleware/validate-session");

const router = Router();

/*******************
 * Appointment Test
 *******************/
router.get("/test" , async function (req, res) {
    try{
        res.status(200).json("Appointment controller is working")
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/*******************
 * Appointment Get All
 *******************/

router.get("/all" , async function (req, res) {
    try{
        Appointment.findAll( { where: {owner_id: req.user.id}})
        Appointment.findAll( { where: {appId: req.user.id }})
        await((apt) => res.status(200).json(apt))
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/*******************
 * Appointment Create
 *******************/

router.post("/add" , async function (req, res) {
    try{
        const addApt = {
            appDate: req.body.appointment.date,
            appTime: req.body.appointment.time, 
            appLoc: req.body.appointment.location,
            appDoc: req.body.appointment.doctor,
            appNotes: req.body.appointment.notes,
        }
        Appointment.create(apt)
        .then((apt) => res.status(200).json(apt))
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/*******************
 * Appointment Update
 *******************/

router.post("/:id" , async function (req, res) {
    try{
        const updateApt = {
            appDate: req.body.appointment.date,
            appTime: req.body.appointment.time, 
            appLoc: req.body.appointment.location,
            appDoc: req.body.appointment.doctor,
            appNotes: req.body.appointment.notes,
        }
        const query = { where: { id: req.params.id } };

        Appointment.update(apt, query)
        .then((apt) => res.status(200).json(apt))
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/*******************
 * Appointment Delete
 *******************/

router.delete("/:id" , async function (req, res) {
    try{
        const query = { where: { id: req.params.id, owner_id: req.appointment.id}}
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

module.exports = Appointment;

