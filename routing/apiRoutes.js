// ROUTES
// ==============================================================================
var friends = require("./../app/data/friends");

module.exports = function(app) {
// GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, response) {
   response.json(friends);
});

// POST route /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/friends", function(req, response) {
    console.log(req.body);
    friends.push(req.body);
});

}
