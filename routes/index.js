var path = require('path');

module.exports = function (app) {
    app.all('*',function (req,res,next) {
        // res.writeHead(200, { "Content-Type": "text/plain" });
        console.log('all pass here');
        next();
    });
    app.get('/',function (req, res) {
        res.send('index');
    });
    app.get('/hello',function (req, res) {
        res.sendFile(path.posix.resolve(__dirname,'..','public/index.html'))
    });
    app.use('/file',function (req, res) {
        console.log(__dirname);
        res.sendFile(path.posix.resolve(__dirname,'..','json/test.json'))
    });
    app.get('/ejs',function (req, res) {
        res.render('test',{title:'dynamic test ejs'})
    });
};