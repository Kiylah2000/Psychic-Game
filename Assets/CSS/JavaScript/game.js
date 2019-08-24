<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="Assets/CSS/style.css">

    <title>Document</title>
</head>

<body>
    <h1>Let's Play a Game!</h1>
    <div id="guesses-left"></div>
    <script type="text/javascript">

        // Guess what letter I'm thinking of
        // Wins: (# of times the user has guessed the letter correctly)
        // Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
        // Guesses Left: (# of guesses left. This will update)
        // Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
        // When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
        // When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

        // Creates an array that lists out all of the options (The Alphabet).
        var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
        var name = prompt("What is your name?");

        // Creating variables to hold the number of wins, losses, and Guesses left. They start at 0.
        var myWins = 0;
        var computerWins = 0;
        var guessesLeft = 9;
        let totalGuesses = 9;
        let guessedLetters = [];
        var letterToGuess = null;
        var computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];


        // Create variables that hold references to the places in the HTML where we want to display things.
        var myGuessText = document.getElementById("MyGuess-text");
        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");
        var guessesLeftText = document.getElementById("guesses-left");
        var computerChoiceText = document.getElementById("computerchoice-text");
        var guessesSoFar = document.getElementById('guess-so-far')

        //When key is released it becomes the users guess
        document.onkeyup = function (event) {
            var myGuess = event.key;
            var winner = "";
            
            if (myGuess === computerGuess) {
                // winner = name;
                myWins++;
                alert(winner + " won the game!");
            }
            else {
                // winner = "Computer"
                guessesLeft--;
                guessedLetters.push(userGuess);
                guessesLeftText.innerHTML = "Guesses left: " + guessesLeft;
                guessesSoFar.innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
            }

            

            console.log("User= " + name);
            console.log("User's Guess = " + usersNumber);
            console.log("Computer'sNumber = " + computersNumber);
            console.log("user Wins = " + userWins);
            console.log("Computer Wins = " + computerWins);
            playAgain = confirm("Do you want to play again?");




            
            function updateLetterToGuess() {
                this.letterToGuess = this.computerGuess[Math.floor(Math.random() * this.computerGuess.length)];
            };

            var reset = function () {
                totalGuesses = 9;
                guessesLeft = 9
                guessedLetters = [];
                setTimeout(function () { document.querySelector('.mantis').style.display = 'none'; }, 5000);
                updateLetterToGuess();
                updateGuessesLeft();
                updateGuessesSoFar();
            }

            updateLetterToGuess();
            updateGuessesLeft()



            // Display the user and computer guesses, and wins/losses/ties.
            myGuessText.textContent = "You chose: " + myGuess;
            computerChoiceText.textContent = "The computer chose: " + computerGuess;
            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses: " + losses;
        }





















    </script>
</body>

</html>