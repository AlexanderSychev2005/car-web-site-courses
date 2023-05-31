var quotes = [
    [
        "If you're going to do something, do it with style!",

        "Jason Statham"
    ],

    [
        "I love people who have a good sense of humor, tell a good story, tell a good joke.",

        "Jason Statham"
    ],

    [
        "The best things in life sometimes happen spontaneously.",

        "Jason Statham"
    ],

    [
        "High risk is high adrenaline.",

        "Jason Statham"
    ],
    [
        "You only get one shot in your life, and you might as well push yourself and try things.",

        "Jason Statham"
    ],
    [
        "Looking good and feeling good go hand in hand. If you have a healthy lifestyle, your diet and nutrition are set, and you're working out, you're going to feel good.",

        "Jason Statham"
    ]
];

document.getElementById("next-quote").addEventListener("click", function () {


    var quote = quotes[Math.floor(Math.random() * quotes.length)];


    var phrase = document.querySelector("#phrase");


    var author = document.querySelector("#author");

    phrase.innerHTML = quote[0];
    author.innerHTML = quote[1];
});


var quote = quotes[Math.floor(Math.random() * quotes.length)];


var phrase = document.querySelector("#phrase");

var author = document.querySelector("#author");

phrase.innerHTML = quote[0];
author.innerHTML = quote[1];


