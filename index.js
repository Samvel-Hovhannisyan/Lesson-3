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

// var express = require("express");
// var app = express();

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

// app.use(express.static("public"));

// app.get("/", function(req, res){
//     res.redirect("public");
// });

// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//     console.log(mySquareObject.getArea());
// }
// main();

// app.listen(3000, function () {
//     console.log("Example is running on port 3000");
// });

// var fs = require('fs');

// function main() {
//     var file = "hello.txt";
//     fs.appendFileSync(file, "Hello world\n");
// }
// main();

// var fs = require('fs');
// var dummyText = "Apple yep";

// function main() {
//     fs.writeFileSync("dummytext.txt", dummyText);
//     var text = fs.readFileSync("dummytext.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt",
//         text.replace("Apple", "Microsoft")
//     );
// }

// main();

// var fs = require('fs');

// var obj = {
//     "first_name": "Vardan",
//     "last_name": "Hovsepyan",
//     "age": 13,
//     "tumo_student": true
// }

// var txt_obj = JSON.stringify(obj);

// function main() {
//     fs.writeFileSync("obj.json", txt_obj);
//     var text = fs.readFileSync("obj.json").toString();
//     console.log(txt_obj == text);
//     console.log(text);
// }

// main();


