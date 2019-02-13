const http = require('http');
var express = require("express");
var app = express();
var PORT = 3000;

// Data
var friends = [{

}];

app.get("/", function(req, res) {
    res.send("Welcome to Friend Finder");
});

app.get("/api/freinds/:friend", function(req, res) {
    // Grab the selected parameter
    var chosen = req.params.friend;
    console.log(chosen);
  
    // Filter to show only the selected character
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
  
    // Otherwise display "No character found"
    return res.send("No character found");
  });
  

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });