const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

//public static path
const static_path = path.join(__dirname, "../public");
// console.log(path.join(__dirname, "../public"));
// app.use(express.static(static_path));

//dynamic path
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));
app.get("/", (req, res) => {
    // res.send("welcome"); //static
    res.render("index"); //dynamic
});
app.get("/index", (req, res) => {
    res.render("index");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("/home", (req, res) => {
    res.render("index");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("*", (req, res) => {
    res.render("404error", {
        errorMsg: "Opps! Page Not Found",
    });
});

app.listen(port, () => {
    console.log(`listening to the port 🚀 ${port}`);
});