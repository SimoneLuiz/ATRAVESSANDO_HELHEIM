function level1() {
  const startText = `Ao abrir seu olhos Liv já não estava mais nos campos de guerra próximo ao seu vilarejo, logo percebeu o frio e alguém aproximar dela, quando virou os olhos uma linda mulher brilhando como ouro falava com ela: \n\n- Oi Liv, bem vinda a Helheim, esse aqui é meu pequeno paraíso para aqueles que morrem sem Glória. Mas não era para você estar aqui, ainda não chegou a sua hora.\nA garota tentou balbuciar mas nenhum saiu de sua boca.\n\nA mulher continuou.\n\n- Para aqueles que como você vêm para cá antes da hora, precisam cruzar os meus domínios se desejam sair. Ao horizonte você pode ver a raiz de Yggdrasil, se desejar retornar só precisa ir até lá. Isso não vai ser uma tarefa fácil, mas você é uma jovem determinada não é?\n\nAntes que a garota tivesse alguma reação, a mulher some enquanto ri, e de seu corpo agora inexistente Liv ouviu uma última frase.\n\n- Apenas os determinados voltam para Midgard.\n\nEm meios a névoas e as trevas Liv se levanta e começa a sua jornada até Yggdrasil, a sua única saída de Helheim.`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level1_2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level1_3();
  };
  const text =
    "Ao seguir o seu caminho Liv encontra um jovem rapaz, belo, alto, mas de aparência macabra, possuia uma mascara em sua nuca e carregava consigo uma adaga. Antes que ela pudesse falar com ele, ouviu ele dizer em alto e bom tom:\n\n- Ei! Você é a Liv não é? Eu tava procurando por você, é fácil se perder por aqui, eu vou te ajudar.\n\nA garota pergunta:\n\n- Mas quem é você?\n\nEle responde:\n\n- Muito prazer, meu nome é Loki, você já deve me conhecer. Já até rezou parar mim. Vou ser direto eu e o meu irmão Vidar estamos em uma pequena aposta, ele acha que a bruxa vai conseguir sair daqui primeiro, porém eu apostei em você. Então eu vou te ajudar, a única regra é que você precisa acertar 3 perguntas para sair daqui, acho que nosso pai Odin não vai gostar, mas e eu já quero começar, você está pronta?";
  document.getElementById("game-flow-paragraph").innerText = text;
}

function level1_3() {
  var answer = prompt(
    "Para sair de Helheim você precisar chegar até que árvore? \nÁlfheim  \nMimir \nYggdrasil"
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "yggdrasil" && atempts < 3) {
    answer = prompt(
      `Vamos eu sei que você é mais esperta que isso, vou te dar mais ${
        3 - atempts
      } chance(s).\n\nPara sair de Helheim você precisar chegar até que árvore? \nÁlfheim  \nMimir \nYggdrasil`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1528372367/content-items/002/383/259/details03-original.jpg?1528372367')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
      "Desse jeito você nunca irá sair de Helheim.\n\nA escuridão de Helheim te domina e você se torna mais uma das almas errantes.\n\nLoki ficou decepcionado por ter apostado em você! Mas feliz por estar onde merece...";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {};
  } else {
    document.getElementById("game-flow-title").innerText = "Você acertou!";
    document.getElementById("game-flow-paragraph").innerText =
      "Loki fala para Liv:\n\n- Venha comigo lhe darei mais algumas dicas de como não morrer ao sair daqui. A proposito eu sei o que você fez! Mas não fique muito feliz, ainda tenho que lhe fazer mais duas perguntas. Você sabia que alguns dos meus irmão estão aqui? Principalmente o Baeldaeg alguns o chamam de Baldur, eu não soltei uma lágrima por ele.\n\nLoki começa a andar rapidamente enquanto rí.";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "../pages/livLevel2.html";
    };
  }
}

window.onload = level1;
