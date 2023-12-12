// document.getElementById('bt-carrinho').addEventListener('click', function() {
//     var fixedDiv = document.getElementById('fixedDiv');
//     fixedDiv.classList.toggle('showDiv');
//     fixedDiv.classList.toggle('hiddenDiv');
// });

// const bt_N = document.getElementsByClassName("bt-carrinho");

// bt_N.addEventListener('click', function () {
//   let fixedDiv = document.getElementById("fixedDiv");
//   if (fixedDiv.style.display == "none") {
//     fixedDiv.style.display = "flex";
//   } else {
//     fixedDiv.style.display = "none";
//   }
// });

const produt = [
  { nome: "Paralama", preco: 1000 },
  { nome: "Freio motor", preco: 980 },
  { nome: "Parafuso", preco: 970 },
  { nome: "Difusor", preco: 960 },
  { nome: "Catalisador", preco: 950 },
  { nome: "Caixa de Câmbio", preco: 940 },
  { nome: "Escape Cromado", preco: 930 },
  { nome: "Chicote com sensor", preco: 920 },
  { nome: "Tampa Intemediária Retarder", preco: 910 },
  { nome: "Kit Embreagem", preco: 900 },
  { nome: "Cruzeta", preco: 890 },
  { nome: "Cuica de Freio", preco: 880 },
  { nome: "Árvore Seletora de Câmbio", preco: 980 },
  { nome: "Eixo Secundário do Câmbio", preco: 870 },
  { nome: "Armação Parabrisa", preco: 860 },
  { nome: "Volante", preco: 100 },
  { nome: "Tapete", preco: 90 },
  { nome: "Farol", preco: 150 },
  { nome: "Buzina", preco: 400 },
  { nome: "Óleo Lubrificante Scania", preco: 70 },
];

const containerCarrinho = document.querySelector(".prod-car");
let listaCarrinho = document.querySelectorAll(".car-item");
const container_Car = document.querySelector("aside");
const vitrine_prod = document.querySelector(".vitrine");

const btnCar = document.querySelector(".bt-carrinho");
btnCar.addEventListener("click", function () {
  container_Car.style.display = "flex";
  vitrine_prod.style.width = "70%";
});

const btnFechar = document.querySelector(".fa-xmark");
btnFechar.addEventListener("click", function () {
  container_Car.style.display = "none";
  vitrine_prod.style.width = "100%";
});

const btnsItem = document.querySelectorAll(".item");

btnsItem.forEach(function (button_item) {
  button_item.addEventListener("click", function () {
    let achei = false;

    let nome = this.querySelector(".desc-prod").textContent;
    let preco = parseFloat(
      this.querySelector(".preco").querySelector("span").textContent
    );

    const itemCriado = document.createElement("div");
    itemCriado.classList.add("car-item");
    itemCriado.setAttribute("data-dado", 1);
    itemCriado.innerHTML =
      "<div class='info'><p class='nome'>" +
      nome +
      "</p><p class='quant'>x<span>1</span></p></div><div class='preco'>$ <span>" +
      preco.toFixed(2) +
      "</span></div>";

    for (i = 0; i < listaCarrinho.length; i++) {
      let nomeItem = listaCarrinho[i].querySelector(".nome").textContent;
      if (nomeItem == nome) {
        const campoQuant = listaCarrinho[i]
          .querySelector(".quant")
          .querySelector("span");
        const campoPreco = listaCarrinho[i]
          .querySelector(".preco")
          .querySelector("span");

        let quandidadeOriginal = parseInt(
          listaCarrinho[i].getAttribute("data-dado")
        );
        let quantAterado = quandidadeOriginal + 1;

        let precoAlterado = preco * quantAterado;

        listaCarrinho[i].setAttribute("data-dado", quantAterado);
        campoPreco.innerHTML = precoAlterado.toFixed(2);
        campoQuant.innerHTML = quantAterado;

        achei = true;
      }
    }

    if (achei == false) {
      containerCarrinho.appendChild(itemCriado);
    }

    const campoValorTotal = document
      .querySelector(".valor-total")
      .querySelector("span");
    let valor = parseFloat(campoValorTotal.textContent);
    campoValorTotal.innerHTML = (valor + preco).toFixed(2);

    listaCarrinho = document.querySelectorAll(".car-item");
  });
});
