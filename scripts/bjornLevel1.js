function level1() {
  const startText = `Ao abrir seu olhos Björn já não está mais na cavena e sim em um palácio com paredes negras, e a sua frente possui um grande trono metade em marfim e metade em mármore. Quando de repente um brilho começa a cegá-lo, e uma voz fala com ele:\n\n- Olá Björn! Eu estava esperando você aqui, é raro um Jarl aparecer por essas terras, a maioria deles está se banqueteando com Odin.\n\nO Homem ainda com suas forças, levanta-se rapidamente e diz:\n\n- Quem é você? Hel?\n\nA voz emanava de um orbe flutuante que brilhava em uma intesa cor branca, ele se move em volta de Björn e diz sarcasticamente:\n\n- Parabéns! Eu sou Hel a rainha do submundo.\n\n- Você recebe todos os Jarls em seu palácio?\n\nHel diz:\n\n- Apenas aqueles que precisam passar por alguma provação, talvez essa não seja sua hora, mas para isso você terá que provar. Eu sou uma Deusa prática e por isso apenas contarei breves histórias e te darei três opções, se errar você fica aqui comigo para sempre.`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level1_2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level1_3();
  };
  const text =
    "O Jarl olha com uma visão tensa e pergunta:\n\n- Provações? Eu mereço isso? EU NÃO DEVERIA ESTAR AQUI, EU PODERIA ESTAR EM VALHALLA AGORA! ISSO FOI UM GRANDE ERRO!!! Onde está Freya para me levar pessoalmente?\n\nHel ri intensamente e diz:\n\n- Você morreu sem glória, correu para longe da batalha para morrer como um coelho, até mesmo animais morrem com mais emoção.\n\n- Mas eu já não tinha feito o suficiente? Eu já não trouxe glória para Odin, Ullr, Tyr... Agora não sei se posso confiar em você. - Dir o Homem\n\nHela diz:\n\n- Agora você já está morto e não tem para onde ir, tem algo que eu preciso fazer por você, me siga.\n\nA luz vai até um corredor do palácio e Björn mesmo descontente a segue. Ao chegar uma sala no final do corredor existem 3 portas.\n\n- Você precisará escolher uma dessas portas para ir embora e eu vou te dar apenas 1 chance para voltar atrás. - Diz Hel - Uma porta é de Marfim, outra é de Mármore e a Terceira é de Ouro, 2 levam a morte certa e uma delas leva a vida, escolha com sabedoria.";
  document.getElementById("game-flow-paragraph").innerText = text;
}

function level1_3() {
  var answer = prompt("Qual porta você escolhe? \nMarfim  \nMármore \nOuro");

  let atempts = 1;

  while (answer.toLowerCase() !== "marfim" && atempts < 2) {
    answer = prompt(
      `Qual a cor da Vida Björn não é isso que quer? Viver... ${
        2 - atempts
      } chance(s).\n\n"Qual porta você escolhe? \nMarfim  \nMármore \nOuro`
    );
    atempts++;
  }

  if (atempts > 1) {
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
      "Você acertou homenzinho!";
    document.getElementById("game-flow-paragraph").innerText =
      "Hel se transforma em uma mulher de vestes e cabelo branco, tão palida quanto a neve. Seus pés nem tocam no chão. Ela flutua enquanto explica:\n\n- A porta Branca é a Vida, aquilo que você procura. A preta a morte aquilo que você quer evitar e dourada simbolizava Valhalla, aquilo que não pode alcançar.\n\nOs dois seguem pela porta de marfim em um corredor agora feito inteiramente de Mármore branco, com tochar que brilhavam como a luz do sol.";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "../pages/bjornLevel2.html";
    };
  }
}

window.onload = level1;
