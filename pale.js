const numero1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const numero2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const btn = document.querySelector(".btn");
const resultados = document.querySelector(".resultados");
const resultados2 = document.querySelector(".resultados2");
const acumulado = document.querySelector(".acumulado");


btn.addEventListener("click", () => {
    // let numero = document.getElementById("numero").value;
    // console.log(numero)
    let hexColor = ""
    let hexColor2 = ""
    for (let i = 0; i < 2; i++) {
        hexColor += numero1[generadorNumeroRandom()]
        hexColor2 += numero2[generadorNumeroRandom2()]
            // console.log(hexColor)
    }
    resultados.textContent = hexColor;
    resultados2.textContent = `-${hexColor2}`;

    acumulado.textContent += resultados.textContent + resultados2.textContent + "\n"
        // acumulado = acumulado.textContent + "<br>"
        // for (let j = 0; j < 10; j++) {
        //     acumulado += hexColor
        //     resultados2 += hexColor2
        // }
});

function generadorNumeroRandom() {
    return Math.floor(Math.random() * numero1.length);
}

function generadorNumeroRandom2() {
    return Math.floor(Math.random() * numero2.length);
}