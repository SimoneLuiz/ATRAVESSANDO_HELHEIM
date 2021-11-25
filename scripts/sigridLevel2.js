function level2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level2_2();
  };
  const startText = `Os caminhos guiados por Vidar pareciam chegar mais rápido do que o normal até a árvore da vida, que parecia estar a dias de caminhada começava a se aproximar rapidamente, o Aesir comenta quase que sem querer sobre o assassinato de Sigrid.\n\n- Sabia que as vezes aqueles que nos fazem mal são as pessoas mais próximas de nós? Poderíamos ir até Forseti para isso, poderia fazer um acordo para conseguir a sua vingança, o que acha disso?\n\nSigrid respira fundo e pensa por um instante, e em um ato de de otimismo ela diz:\n\n- Creio que preciso descobrir primeiro para tirar as minhas conclusões, nem sempre a vingança é algo bom.\n\n- Mas todas as vezes ela é satisfatória - Retruca Vidar. - Mas a escolha é sua, só quero que saiba que tem essa opção. Mas estamos quase em Yggdrasil, por falar nisso me responda outra pergunta!`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level2_2() {
  var answer = prompt(
    "Qual o nome dos dois Clãs de Asgard? \nAesir e Vanir \nAesir e Vidir \nAesir e Mimir"
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "aesir e vanir" && atempts < 3) {
    answer = prompt(
      `Creio que pode ser melhor do que isso, mais ${
        3 - atempts
      } chance(s).\n\nQual o nome dos dois Clãs de Asgard? \nAesir e Vanir \nAesir e Vidir \nAesir e Mimir`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1528372367/content-items/002/383/259/details03-original.jpg?1528372367')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
      "Desse jeito você nunca descobrirá a verdade.\n\nA escuridão de Helheim te domina e você se torna mais uma das almas errantes.\n\nVidar fica furioso por ter ido tão longe atrás de você! A sua falha desencadeia outra briga entre os Aesir e os Vanir...";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {};
  } else {
    document.getElementById("game-flow-title").innerText =
      "Você acertou outra vez!";
    document.getElementById("game-flow-paragraph").innerText =
      "Eles continuam andando até chegar em um árvore prateada cheia de louros dourados, no meio uma grande porta feita em ouro e chegando Vidar diz:\n\n-Aqueles são os portões do palácio de Forsetti, se acertar essa ultima pergunta terá a possibilidade de passar adiante e fazer a justiça que merece. Você pode não ser fã de vingança, mas todas as injustiças precisam ser combatidas, e os Aesir lhe concederão uma audiência com o Deus da Justiça caso acerte essa última pergunta.\n\nSigrid diz:\n\n- Vamos meu senhor faça!";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "../pages/sigridLevel3.html";
    };
  }
}

window.onload = level2;
