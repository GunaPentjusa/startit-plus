const vielasPoga = document.getElementById('vielas-poga');
const aprikojumsPoga = document.getElementById('aprikojums-poga');


function toggleSlept(ko) {
    const rindas = document.getElementsByClassName(ko);
    if (ko === "aprikojums") {
        vielasPoga.classList.toggle('selected');
    } else if ( ko === "viela" ) {
        aprikojumsPoga.classList.toggle('selected');
    }
    for (let i = 0; i < rindas.length; i++) {
        // if (rindas[i].classList.contains('slepts')) {
        //     rindas[i].classList.remove('slepts');
        // } else {
        //     rindas[i].classList.add('slepts');
        // }
        rindas[i].classList.toggle("slepts");
    }
}

vielasPoga.addEventListener('click', () => toggleSlept('aprikojums'));
aprikojumsPoga.addEventListener('click', () => toggleSlept('viela'));
