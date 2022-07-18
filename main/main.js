__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/home', (req, res) => {
    res.sendFile(__path + '/page/index.html')
})
router.get('/english', (req, res) => {
    res.sendFile(__path + '/page/english.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/page/index.html')
})


module.exports = router
