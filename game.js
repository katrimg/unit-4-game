$(document).ready(function() {

    var random = Math.floor(Math.random()*102+19);

    $("#number-to-get").text(random);
    
    var num1 = Math.floor(Math.random()*12+1);
    var num2 = Math.floor(Math.random()*12+1);
    var num3 = Math.floor(Math.random()*12+1);
    var num4 = Math.floor(Math.random()*12+1);
    
    var userTotal= 0;
    var wins = 0;
    var losses = 0;
    
    $("#win-count").text(wins);
    $("#loss-count").text(losses);
    
    function reset() {
        random = Math.floor(Math.random()*102+19);
        console.log(random);
        $("#number-to-get").text(random);
        var num1 = Math.floor(Math.random()*12+1);
        var num2 = Math.floor(Math.random()*12+1);
        var num3 = Math.floor(Math.random()*12+1);
        var num4 = Math.floor(Math.random()*12+1);
        userTotal = 0;
        $("#total-score").text(userTotal);
    }
 

    function winner() {
        alert("You Won!");
        wins++;
        $("#win-count").text(wins);
        reset();
    }
    
    function loser() {
        alert("You Lost!");
        losses++;
        $("#loss-count").text(losses);
        reset();
    }
    

    //create a variable array to hold values of each crystal and randomize the values
    var crystalValues = {};
    crystalValues[1] = Math.floor(Math.random()*12+1);
    crystalValues[2] = Math.floor(Math.random()*12+1);
    crystalValues[3] = Math.floor(Math.random()*12+1);
    crystalValues[4] = Math.floor(Math.random()*12+1);
    
    
    //function to print the total of the values combine for user
    function getUserTotal(e) {
       return function() {

        //userTotal is equal to the current total plus the new value of crystal selected
        userTotal = userTotal + crystalValues[e];
        console.log("New userTotal " + userTotal);

        //print the total score in the total=score div of html
        $("#total-score").text(userTotal);
    
        //if the user total is equal to the variable random, call winner function
        if (userTotal === random) {
            winner()
        }
    
        //otherwise if user total is more, call the loser function
        else if (userTotal > random) {
            loser()
        } 
    }
    }
    
    //when a crystal is clicked, getUserTotal function occurs for the specific crystal
    $("#crystal1").on("click", getUserTotal(1));
    $("#crystal2").on("click", getUserTotal(2));
    $("#crystal3").on("click", getUserTotal(3));
    $("#crystal4").on("click", getUserTotal(4));





});