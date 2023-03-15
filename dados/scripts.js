let dadosContainer = document.getElementById("dados-container");
const btnTirar = document.getElementById("btn-tirar");
document.getElementById("nDados").value = 1;

btnTirar.addEventListener("click", () => tirarDados());


function tirarDados() {

    btnTirar.disabled = true;

    let dados = document.getElementById("nDados").value;
    dadosContainer.innerHTML = "";
    dadosContainer.classList.add("shake")
    let i = 1

    setInterval(function () {
        if (i <= dados) {
            let dado = document.createElement("img");
            dado.src = "img/cara_0.svg";
            dado.classList.add("dado");
            dadosContainer.appendChild(dado);
            let resultado = Math.floor(Math.random() * 6) + 1;
            setTimeout(function () {
                dado.src = "img/cara_" + resultado + ".svg";
            }, 460);
        } else {
            clearInterval(intervalo);
        }
        i++;

    }, 1000);


    setTimeout(function () {
        dadosContainer.classList.remove("shake");
        btnTirar.disabled = false;
    }, 1300 + (dados  * 1000))
}

