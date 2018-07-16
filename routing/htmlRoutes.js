// ROUTES
// ==============================================================================
var path = require("path");

module.exports = function(app) {
// GET Route to / which display's the home page.
app.get("/", function(req, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
});

// GET Route to /survey which display's the survey page.
app.get("/survey", function(req, response) {
    response.sendFile(path.join(__dirname, "../public/survey.html"));
});

}
