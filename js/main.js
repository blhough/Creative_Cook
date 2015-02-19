console.log("Main.js loaded");

function Main() {
    var self = this;

    this.Init = function() {
        console.log("Intitiated!");

    };
}

var main = new Main();

$(function() // document has been loaded
    {
        main.Init();
    });
