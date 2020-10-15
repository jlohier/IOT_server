const router = require('express').Router();



router.route('/mine').post((req, res) => {
    const image = req.body.image;
    console.log(image)

    res.send("yes!")
   
})

module.exports = router;