const montoCarteraVista = document.getElementById('monto-cartera');
const montoMesaVista = document.getElementById('monto-mesa');



let montoCartera = localStorage.getItem("montoCartera");
if (montoCartera == null) {
    montoCartera = 0;
}

let montoMesa = localStorage.getItem("montoMesa");
if (montoMesa == null) {
    montoCartera = 0;
}

let dobla = localStorage.getItem("dobla");
if (dobla == null) {
    dobla = false;
}

printNumeros();


document.getElementById('recupera').addEventListener('click', () => {
    recupera();
    printNumeros()
});

document.getElementById('agregar').addEventListener('click', () => {
    agregar();
    printNumeros()
});

document.getElementById('apostar').addEventListener('click', () => {
    apostar();
    printNumeros()
});

document.getElementById('gana').addEventListener('click', () => {
    reclamar();
    printNumeros()
});

document.getElementById('pierde').addEventListener('click', () => {
    pierde();
    printNumeros()
});

document.getElementById('borrar').addEventListener('click', () => {
    borrar();
    printNumeros()
});

document.getElementById('doblar').addEventListener('click', () => {
    doblar()
    printNumeros()
});

document.getElementById('rendirse').addEventListener('click', () => {
    rendirse()
    printNumeros()
});

document.getElementById('apostar-todo').addEventListener('click', () => {
    apostarTodo()
    printNumeros()
});


function agregar() {
    let monto = Number(window.prompt('agrege monto'));
    let auxiliar = Number(montoCartera);
    montoCartera = auxiliar + monto;

}

function apostar() {
    let monto = Number(window.prompt('cuanto apostara ?'));
    let auxiliarcartera = Number(montoCartera);
    let auxiliarmesa = Number(montoMesa);
    auxiliarcartera = auxiliarcartera - monto;

    if (!(auxiliarcartera < 0)) {

        montoMesa = auxiliarmesa + monto;
        montoCartera = auxiliarcartera;

    } else if ((auxiliarcartera + (auxiliarcartera * 0.2)) > -50000000) {

        montoMesa = auxiliarmesa + monto;
        montoCartera = auxiliarcartera + (auxiliarcartera * 0.2);

    } else {

        alert('deuda maxima es de 50.000.000 $');

    }

}

function reclamar() {

    if (!dobla) {
        montoCartera = Number(montoCartera) + (Number(montoMesa) * 2);
        dobla = false

    } else {
        montoCartera = Number(montoCartera) + (Number(montoMesa) * 4);
        dobla = false
    }
    montoMesa = 0;
}

function pierde() {
    montoMesa = 0;
    dobla = false

}

function borrar() {
    montoMesa = 0;
    montoCartera = 0;
    dobla = false

}

function printNumeros() {
    montoCarteraVista.innerHTML = Intl.NumberFormat().format(montoCartera) + ' $';

    if (dobla) {

        montoMesaVista.innerHTML = Intl.NumberFormat().format(montoMesa) + ' $ X2'
    } else {

        montoMesaVista.innerHTML = Intl.NumberFormat().format(montoMesa) + ' $';
    }

    almasenarValores()
}

function recupera() {
    montoCartera = Number(montoCartera) + Number(montoMesa);
    montoMesa = 0;
    dobla = false;
}

function doblar() {
    dobla = true;
}

function rendirse() {
    if (!dobla) {
        montoCartera += (montoMesa / 2);
    }
    montoMesa = 0;
    dobla = false;
}

function apostarTodo() {
    if (montoCartera > 0) {
        let auxiliarcartera = Number(montoCartera);
        let auxiliarmesa = Number(montoMesa);
        montoMesa = auxiliarmesa + auxiliarcartera + (auxiliarcartera * 0.5);
        montoCartera = 0;
    }
}


function almasenarValores() {
    localStorage.setItem('montoMesa', montoMesa);
    localStorage.setItem('montoCartera', montoCartera);
    localStorage.setItem('dobla', dobla);
}