const express = require('express');
const app = express();
const formidable = require('express-formidable');

const fs = require('fs');


app.use(express.static("public"));
app.use(formidable());

app.post('/create-post', function (req, res) {
    const filePath = __dirname + '/data/posts.json';
    const postsContent = fs.readFileSync(filePath);
    const posts = JSON.parse(postsContent);
    posts[Date.now()] = req.fields.blogpost;

    console.log(req.fields.blogpost)


    fs.writeFileSync(filePath, JSON.stringify(posts));
    res.sendStatus(200);
});

app.get('/get-posts', function (req,res){
    res.sendfile( __dirname + '/data/posts.json');
})


app.listen(3000, function () {
    console.log('my server started');
});





/*app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get("/girls", function (req, res) {
    res.send("hello girl!");
});

app.get("/node", function (req, res) {
    res.send("Hello node!");
});

*/

