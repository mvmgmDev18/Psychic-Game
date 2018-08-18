// 2. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

// 3. Guess what letter I'm thinking of

// 4. Wins: (# of times the user has guessed the letter correctly)

// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// 6. Guesses Left: (# of guesses left. This will update)

// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

var wins = 0;
var losses = 0;
var userGuessesLeft = 9;
var userGuessedSoFar = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Set outside the function because always resets on onkeyup.
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("From outside the function",computerChoice);

document.onkeyup = function (event) {

    var userChoice = event.key;
    //grabbing from userChoice inputs to userGuessedSoFar
    userGuessedSoFar.push(userChoice);

    if (userChoice === computerChoice) {
        wins++;
        alert("You beat the Psychic! You won!")
        //Resets back to 9 chances.
        userGuessesLeft = 9;
        //Resets the field
        userGuessedSoFar.length = 0;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("From inside the function",computerChoice);
    }

    else if (userGuessesLeft == 0) {
        losses++;
        alert("You lost! Press Ok to play again!")
        userGuessesLeft = 9;
        userGuessedSoFar.length = 0;
    }
    // userGuesses decrements when when not equal
    else if (userChoice !== computerChoice) {
        userGuessesLeft--;
    }

    var html =
        "<h1>Psychic Guessing Game</h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + userGuessesLeft + "</p>" +
        "<p>Your guessess so far: " + userGuessedSoFar + "</p>";

    //Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;

}
