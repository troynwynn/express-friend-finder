var friends = require(`../data/friends`);


module.exports = function(app) {

    function friendFinder(bol, friends) {
        var bestFriend = [];
    
        
        for (let i=0; i<friends.length-1; i++) {
            var diff = 0
    
            for (let j=0; j<10; j++) {
                newFriendScores = bol.scores[j];
                currentFriendScores = friends[i].scores[j];
                diff += Math.abs(newFriendScores-currentFriendScores);
                
                
            }  
    
            if (i==0) {
                currentMin = diff;
            }
    
            if (currentMin >= diff) {
                currentMin = diff;
                bestFriend = friends[i]
            }
    
        }
    
        return bestFriend;
    
    }
    

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

    app.post("/api/friends", function(req, res) {
        
        var newFriend = req.body;

        newFriend.scores =  newFriend.scores.map( function(num) {
            return parseInt(num, 10);
        });

        console.log(newFriend);

        friends.push(newFriend);

        console.log(friendFinder(newFriend, friends));

        res.json(friendFinder(newFriend, friends));

    });

};