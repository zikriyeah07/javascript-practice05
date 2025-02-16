// Task 2: Lucky Draw Program

// Ask the user to enter their name.
// Generate a random number between 1 and 100.
// Print:
// [User], your lucky number is [Random Number]

// If the lucky number is 50, print "You won a special prize!".
let userName = prompt("Enter Your Name");

if (userName.length >= 1) {
    let randomNumber = Math.floor(Math.random() * 100);

    let giveDisplay = alert(`Hey! ${userName}, your lucky number is ${randomNumber}`)


    if (randomNumber == 50) {
        alert("You won a special prize!")
    }
    else if (randomNumber < 50) {
        alert("You were near to it ")
    }
    else if (randomNumber > 50) {
        alert("oho you got it exceeding 50 anyways try again")
    }
    else {
        alert("Try Again")
    }
}
else { alert("please enter name") }

