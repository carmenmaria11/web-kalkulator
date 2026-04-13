// fakultet.js

// 1. Selve funksjonen som regner ut (dummy-versjon)
export function fakultet(tall) {
    return 120 // Not-yet-implemented
}

// 2. Funksjonen som henter data fra nettsiden
function regnUt(evt) {
    evt.preventDefault()

    const input = document.querySelector('#fakultet input')
    const output = document.querySelector('#fakultet .resultat')

    const tall = parseInt(input.value)

    // Her kaller vi funksjonen over
    output.textContent = fakultet(tall)
}

// 3. Koble knappen til funksjonen
const knapp = document.querySelector('#fakultet button');
if (knapp) {
    knapp.addEventListener('click', regnUt);
}