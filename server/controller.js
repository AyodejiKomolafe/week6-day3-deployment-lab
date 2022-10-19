const path = require('path')

module.exports = {
    getHtml: (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    },
    getCss: (req,res) => {
        res.sendFile(path.join(__dirname, "../public/styles.css"))
    }

}