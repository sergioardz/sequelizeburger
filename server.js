var express = require("express");

var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("The magic is happening on: http://localhost:" + PORT);
  });
});
