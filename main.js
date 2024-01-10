var a = "ewogICAgInJlZGFjdGllc29tbWVuIjogewogICAgICAgICIxMi8xIjogWyI0NiIsICIyNTAwIiwgIjEyMCIsICIxMSIsICI1NTMwIiwgIjYiLCAiODgiLCAiODY1ODUzIiwgIjEwIiwgIjM0Il0KICAgIH0sCgogICAgInNwZWxsaW5nb2VmZW5lbiI6IHsKICAgICAgICAiMTAvMDEiOiBbIlB5cmVuZWXrbiIsICJpayBzY2hyZWVmIiwgInNwaW9uIiwgInBhZ2luYSdzIiwgImRlIGR5bmFtbyIsICJpayBoZWIgZ2VkaXNjcmltaW5lZXJkIiwgImdlaGVjaHRlIiwgImtyYW50ZW5iYWsiLCAicmFhZHNlbGFjaHRpZyIsICJrcmFiIiwgInZlcm5hdXdlbiIsICJoaWogaGVyaW5uZXJ0IiwgInRvZXJpc21lIiwgImtuaWXrbiIsICJzcG9ydGl2aXRlaXQiLCAic3RpY2tlciIsICJoZXQgZXhjdXVzIiwgInZlaWxpZ2hlaWRzc3BlbGQiLCAic2hvdyIsICJzdHVpdmVuIiwgImRlIGtldXplbWVudSdzIiwgInNjaGVwamUiLCAiaGV0IGxvZ2llcyIsICJkZSB6ZWUtZWdlbCIsICJkZSBrYW5nb2Vyb2UiLCAiZGUgc3BpbmF6aWUiLCAidHJha3RhdGllIiwgInp3b20iLCAiaGlqIG9udHZpbmciLCAic29ycnkiLCAiaGV0IGRvcnBzcGxlaW4iLCAiZ2V6d29ydmVuIiwgInZhYWtzdGUiLCAiZGUgd2Vic2l0ZSIsICJyYWNlIiwgInZpbmRpbmciLCAiaHlhY2ludCIsICJsdWNodGZvdG8ncyIsICJ2ZXJkZWRlZ2luZyIsICJiZW5pamRlbiIsICJzcHJvb2tqZSIsICJzbGlqcGVuIiwgInRyZWl0ZXJlbiIsICJkaWVldCJdCiAgICB9Cn0=";
var uc = "ewogICAgImltcmFuZnJlZSI6ICJyZWRhY3RpZXNvbW1lbi4xMi8xIiwKICAgICJJbXJhbmZyZWUiOiAicmVkYWN0aWVzb21tZW4uMTIvMSIKfQ==";

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

function antwoordensubpageloaded() {
    var filename = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1).slice(0, -5);
    var lessonoptioncontainer = document.getElementById("lessonoptioncontainer");
    for (const key in JSON.parse(atob(a))[filename]) {
        if (JSON.parse(atob(a))[filename].hasOwnProperty(key)) {
            let cardDiv = document.createElement("div");
            cardDiv.className = "card";
            cardDiv.style.cursor = "pointer";
            cardDiv.textContent = key;
            cardDiv.addEventListener("click", function() {
                this.parentElement.remove();
                var ua = document.getElementById("ua");
                JSON.parse(atob(a))[filename][key].forEach(function(element, index) {
                    ua.innerHTML += "<p>" + (index + 1) + ": " + element + "</p>";
                });
            });
            lessonoptioncontainer.appendChild(cardDiv);
        }
    }
}