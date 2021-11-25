function level2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level2_2();
  };
  const startText = `\n\nHel enquanto flutua sob o chão diz para Björn:\n\n- A luz da vida é uma chama que pode ser apagada a qualquer momento, e isso deveria fazer os homens viverem suas vidas com as ações corretas, quantos como você chegam em Helheim revoltados por não terem sido levados até Valhalla, mas a ganância deles não deixou, morreram sem glória, escondidos outros mesmo assassinados por erros de seu passado, as vezes a gente só precisa seguir em frente.\n\nAo continuar andando o corredor chega no final onde existem três caminhos. Um caminho claro a esquerda, um escuro a frente e outro escuro a direta.\n\n- Escolha um dos caminhos nobre homem!`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level2_2() {
  var answer = prompt(
    "Qual caminho deseja seguir? \nEsquerda \nFrente \nDireita"
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "frente" && atempts < 3) {
    answer = prompt(
      `Talvez você morra por aí! Mais ${
        3 - atempts
      } chance(s).\n\nQual caminho deseja seguir? \nEsquerda \nFrente \nDireita`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1528372367/content-items/002/383/259/details03-original.jpg?1528372367')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
      "O que está morto não pode morrer!\n\nA escuridão de Helheim te domina e você se torna mais uma das almas errantes.\n\nHel se transforma em uma mulher, ri de você e some em meio a fumaça.";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {
      location.href = "../index.html";
    };
  } else {
    document.getElementById("game-flow-title").innerText =
      "Para um nobre você é inteligente!";
    document.getElementById("game-flow-paragraph").innerText =
      "Hel fica feliz com o acerto do Jarl e diz:\n\nOs caminhos em frente são sempre escuros, a gente nunca sabe o que vai encontrar, mas na maioria das vezes os caminhos da glória sãos os mais difíceis - Agora andando Hel comenta - Eu sei que você deveria ter alertado sobre a assassina de Sigrid para o seu vilarejo, mas não o fez com medo que aquilo abalasse os homens, a morte de uma sacerdotiza nunca é um bom sinal, você vê que talvez tenha um motivo para estar morto e aqui agora?\n\nBjörn diz:\n\n- Eu sei que fiz errado, mas não podia tomar esse risco, a gente estava prestes a ser atacado, o homens estavam motivados e aquela garota era uma esperança para nossa vila, diziam que ela era abençoada por Freya e era como uma Valquíria eu acabei não tendo coragem para contar a todos...";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "./bjornLevel3.html";
    };
  }
}

window.onload = level2;
