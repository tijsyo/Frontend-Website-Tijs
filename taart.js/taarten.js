




window.addEventListener('DOMContentLoaded', (event) => { // pas als alle content is geladen kan deze functie geladen worden. //
    // source = https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
    var taarten = document.querySelectorAll('.taarten-container2'); // Selecteer alle taarten containers //

    for (var i = 0; i < taarten.length; i++) { // loop zorgt ervoor dat alle 4 de elementen worden geselecteerd hij loopt er doorheen //
        taarten[i].addEventListener('click', function () { // hij zoekt eerst op welke je klikt van de containers en verolgens zet hij de opacity naar 0 //
            this.style.opacity = "0"; // this is het huidige element die in de loop an de beurt is // style is een element aanpassen naar opacity 0 //
        });
    }
});

// source = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
