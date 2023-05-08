const express = require("express");
const router = express.Router();
const characters = require("../Services/mole");

router.get("/", async function (req, res, next){
    try {
        res.json(await characters.getMultiple(req.query.page));
    }   catch(err){
        console.error(`Èrror while getting characters`, err.message);
        next(err);
    }
});

module.exports = router;