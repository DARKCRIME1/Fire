__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/home', (req, res) => {
    res.sendFile(__path + '/page/index.html')
})
router.get('/english', (req, res) => {
    res.sendFile(__path + '/page/english.html')
})
router.get('/sinhala', (req, res) => {
    res.sendFile(__path + '/page/sinhala.html')
})
router.get('/tamil', (req, res) => {
    res.sendFile(__path + '/page/tamil.html')
})
router.get('/film', (req, res) => {
    res.sendFile(__path + '/page/film.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/page/index.html')
})
router.get('/google', (req, res) => {
    res.sendFile(__path + '/page/google6237b6908623a8cf.html')
})

module.exports = router
