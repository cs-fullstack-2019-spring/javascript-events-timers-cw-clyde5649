document.querySelector("#id-wrongbox").addEventListener("click", function(event) {
    document.getElementById("output").innerHTML += "! <code>preventDefault()</code> I TOLD YOU NOT TO CLICK THIS!<br>";
    event.preventDefault();
}, false);