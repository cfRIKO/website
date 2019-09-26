var express = require('express')
var router = express.Router()
var fetch = require('node-fetch')

router.get('/projects', (req, res) => {
    fetch('https://api.github.com/users/cfriko/repos')
        .then(res => res.json())
        .then(json => {
            var data = []
            json.forEach(element => {
                data.push({
                    name: element.name,
                    url: element.html_url,
                    description: element.description
                })
            });
            res.json({
                message: "Projects",
                data: data
            })
        })
})

module.exports = router