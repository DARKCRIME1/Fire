__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/film', (req, res) => {
    res.sendFile(__path + '/page/index1.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/page/index.html')
})


module.exports = router
