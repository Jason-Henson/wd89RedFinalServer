const{ Router } = require("express");
const { Meds } = require("../models/meds");
const validateSession = require("../middleware/validate-session");

const router = Router();

/****************
 * Family Test
 ****************/

router.get("/test" , async function (req, res) {
    try{
        req.status(200).json("Meds controller test successful")
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Get All
 ****************/

router.get("/all" , async function (req, res) {
    try{
        Family.findAll( { where: {medId: req.user.id} } )    
        .then((med) => res.status(200).json(med))
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Add
 ****************/

router.post("/add" , async function (req, res) {
    try{
        const medAdd = {
            medName: body.req.meds.name, 
            medScript: body.req.meds.script,
            medDesc: body.req.meds.desc,
            medActive: body.req.meds.medActive,
            medNotes: body.req.meds.notes,
        }
        Meds.create(medAdd)
        .then((med) => res.status(200).json(med))
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Update
 ****************/

router.post("/:id" , async function (req, res) {
    try{
        const medUpdate = {
            medName: body.req.meds.name, 
            medScript: body.req.meds.script,
            medDesc: body.req.meds.desc,
            medActive: body.req.meds.medActive,
            medNotes: body.req.meds.notes,
        }
        const query = { where: { id: req.params.id } };
        Meds.update(medUpdate)
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Delete
 ****************/

router.delete("/:id" , async function (req, res) {
    try{
        const query = { where: { id: req.params.id, owner_id: req.meds.id}}
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

module.exports = router; 