var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send(`
        <h1>Welcome</h1>
        <img src="/images/misc/background.jpg" alt="backgorund" style="height: 300px;">
        <p>Roux Academy Meetups put together artists from all works of life</p>
    `);
});

module.exports = router;
