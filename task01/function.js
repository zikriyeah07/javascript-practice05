// Task 1: Movie Ticket Booking System

// Objective: Use Math.random(), Math.ceil(), and loops to simulate a simple movie ticket booking system.

// Instructions:

// 1. Ask the user to enter their name.
// 2. Display a list of available seats (1 to 30).
// 3. Generate a random seat number using Math.ceil(Math.random() * 30).
// 4. Assign the seat to the user and display:

// Hello [User], your seat number is [Random Seat Number].
let userName = prompt("Enter Your Name");
alert("Available Seats Are 1 to 30");
// let totalSeats = "1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ,  "
let seatNumber = Math.ceil(Math.random()* 30 );


alert(`Hello ${userName}, your seat number is ${seatNumber}`)
