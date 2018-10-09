//console.log("Hello Node");

// var os = require("os");
// var message = "The platform is";

// function main() {
//     console.log(message + os.platform())
// }

// main();

// var express = require("express");
// var app = express();

// app.get("/", function (req, res) {
//     res.send("Hello world");
// })

// app.listen(3000, function () {
//     console.log("Example is running on port 3000");
// })

var express = require("express");
var app = express();

// app.get("/", function (req, res) {
//     res.send("<h1>Hello world</h1>")
// });

// app.get("/name/:name", function (req, res) {
//     var name = req.params.name;
//     res.send("<h1>Hello " + name + "</h1>");
// });

// app.get("/google", function (req, res) {
//     res.redirect('http://google.com');
// });

// app.get("/:search", function (req, res) {
//     var search = req.params.search
//     res.redirect('http://google.com/search?q=' + search);
// });

app.use(express.static("public"));

app.get("/", function(req, res){
    res.redirect("public");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});