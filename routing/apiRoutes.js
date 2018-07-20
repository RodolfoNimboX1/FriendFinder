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
    //friends.push(req.body);
    // newGamer is going to be the new user that filled the form
    var newGamer = req.body;

    // looking for best match possible
    var match = {};

    for (var i = 0; i < newGamer.scores.length; i++) {
        if (newGamer.scores[i] == "1 (Strongly Disagree)") {
            newGamer.scores[i] = 1;
        } // if ends 
        else if (newGamer.scores[i] == "5 (Strongly Agree)") {
            newGamer.scores[i] == 5;
        } // else if ends
        else {
            newGamer.scores[i] = parseInt(newGamer.scores[i]);
        } // else ends
    } // for ends

    // compare scores from newGamer to api friend list

    var bestMatch = 0;
    //greatest score difference for a question is 4, therefore greatest difference is 4 times # of questions in survey
    var matchDifference = 40;

    for (var i = 0; i < friends.length; i++) {
        var totalDiff = 0;

        for (var j = 0; j < friends[i].scores.length; j++) {
            var diffOnScore = Math.abs(friends[i].scores[j] - newGamer.scores[j]);
            totalDiff += diffOnScore;
        }// second for ends

        // if totalDiff in scores is less than the best match so far
        // save that index and difference
        if (totalDiff < matchDifference) {
            bestMatch = i;
            matchDifference = totalDiff;
        } // if ends

    }// first for ends

    match = friends[bestMatch];

    friends.push(newGamer);

    response.json(match);
});

}
