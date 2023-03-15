
let dadosContainer = document.getElementById("dados-container");

const btnTirar = document.getElementById("btn-tirar");
document.getElementById("nDados").value = 1;


btnTirar.addEventListener("click", () => tirarDados());


function tirarDados() {

    dadosContainer.innerHTML = "";
    dadosContainer.classList.add("shake")

    for (let i = 0; i < document.getElementById("nDados").value; i++) {
        setTimeout(function () {

            let dado = document.createElement("img");
            dado.classList.add("dado");
            dadosContainer.appendChild(dado);
            dado.src = "img/cara_0.svg";

            setTimeout(function () {
                let resultado = Math.floor(Math.random() * 6) + 1;
                dado.src = "img/cara_" + resultado + ".svg";
                document.documentElement.style.setProperty('--random', Math.random());
            }, 460);

        }, 1000 + (i * 950));
    }
    setTimeout(function () {
        dadosContainer.classList.remove("shake")
    },1000)


}