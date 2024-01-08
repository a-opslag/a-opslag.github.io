var a = "ewogICAgInJlZGFjdGllc29tbWVuIjogewogICAgICAgICIxMi8xIjogWyI0NiIsICIyNTAwIiwgIjEyMCIsICIxMSIsICI1NTMwIiwgIjYiLCAiODgiLCAiODY1ODUzIiwgIjEwIiwgIjM0Il0KICAgIH0KfQ==";
var uc = "ewogICAgImltcmFuZnJlZSI6ICJyZWRhY3RpZXNvbW1lbi4xMi8xIgp9";

document.addEventListener('contextmenu', event => event.preventDefault());

function usecode() {
    var codeinputfield = document.getElementById("codeinputfield");
    var usecodebutton = document.getElementById("usecodebutton");
    var ua = document.getElementById("ua");
    if (JSON.parse(atob(uc)).hasOwnProperty(codeinputfield.value)) {        
        var result = JSON.parse(atob(uc))[codeinputfield.value].split('.').reduce(function(obj, key) {
            return obj && obj[key];
        }, JSON.parse(atob(a)));
        if (result) { ua.innerHTML = "<h2>Unlocked " + JSON.parse(atob(uc))[codeinputfield.value] + "</h2>";
            for (const key in result) { ua.innerHTML += "<p>" + (parseInt(key) + 1) + ": " + result[key] + "</p>"; }
        } else { ua.innerHTML = "<h2>Could not find any answers from that code</h2>"; }
    } else { ua.innerHTML = "<h2>Code not found</h2>"; }
    codeinputfield.remove(); usecodebutton.remove();
}