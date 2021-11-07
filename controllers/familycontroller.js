const express = require("express");
const router = express.Router();
const { Family } = require("../models");
const validateSession = require("../middleware/validate-session");

/****************
 * Family Get All
 ****************/

router.get("/all/" ,validateSession, async(req, res) => {
    try{
        let familyAll = await Family.findAll({where: {userId: req.user.id}})
        res.status(200).json(familyAll)
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Add
 ****************/

router.post("/add" ,validateSession, async function (req, res) {
    try{
        let famAdd = {
            famMember: req.body.family.famMember,
            famAge: req.body.family.famAge,
            famAllergic: req.body.family.famAllergic,
            userId: req.user.id,
        };
        let result = await Family.create(famAdd)
            return res.status(200).json(result)
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Update
 ****************/

router.put("/:id" ,validateSession, async function (req, res) {
    try{
        let famUpdate = await {
            famMember: req.body.family.famMember,
            famAge: req.body.family.famAge,
            famAllergic: req.body.family.famAllergic, 
        }
        const query = { where: { id: req.params.id } };

        Family.update(famUpdate, query)

        famUpdateResult(famUpdate)
            function famUpdateResult() {
                res.status(200).json(famUpdate)

            }
        
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Delete
 ****************/

router.delete("/:id" ,validateSession, async function (req, res) {
    try{
        const query = await Family.destroy({ where: { id: req.params.id, userId: req.user.id}})
        res.status(200).json(query)
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

module.exports = router;