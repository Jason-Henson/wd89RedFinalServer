const{ Router } = require("express");
const { Family } = require("../models");
const validateSession = require("../middleware/validate-session");

const router = Router();

/****************
 * Family Test
 ****************/

router.get("/test" , async function (req, res) {
    try{
        req.status(200).json("Family controller test successful")

    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Get All
 ****************/

router.get("/all" , async function (req, res) {
    try{
        let familyAll = await Family.findAll({
            where: {
                id: user.params.id 
            },
        })

        Success(familyAll)
            function Success(familyAll) {
                req.status(200).json(familyAll)
            }
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

        famAddResult(famAdd)
            function famAddResult() {
            Family.create(famAdd)
            res.status(200).json(famAdd)
            }
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

/****************
 * Family Update
 ****************/

router.put("/:id" , async function (req, res) {
    try{
        let famUpdate = await {
            famMember: req.body.family.name,
            famAge: req.body.family.age,
            famAllergic: req.body.family.allergic, 
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

router.delete("/:id" , async function (req, res) {
    try{
        const query = { where: { id: req.params.id, owner_id: req.family.id}}
    }catch(e){
        res.status(500).json({message: e.message})
    }
});

module.exports = router;