function level1() {
  const startText = `Ao chegar próximo do homem, Sigrid vê em seu rosto alguém familiar, era muito parecido com a estátua de Vidar, um dos mais fortes Aesir, o Deus da Vingança, quando percebe de quem se trata ela logo abre um sorriso e  diz:\n\n- O que faz tão longe de Vidir meu senhor?\n\nCom um sorriso no rosto o Aesir responde:\n\n- Pelo visto não preciso nem de apresentação. Sua morte ecoou até mesmo nos salões de Valhalla, e eu me encobi de lhe ajudar. Uma sacerdotisa fiel como você não pode descansar distante daqueles a quem dedicou tanto tempo.\n\n- Os Deuses sentiram a minha falta? - Disse Sigrid.\n\nVidar responde:\n\n- Mais do que pode imaginar. São tempos sombrios e precisamos dos poderosos, Odin o Pai de Todos tem se preparado todos os dias para o Ragnarok. Ao descer pela Yggdrasil passei por Mimir, o Mais Sábio e ele disse que eu devia te encontrar o quanto antes, pois você foi morta injustamente, isso me deixou isso ainda mais motivado em acha-la.`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level1_2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level1_3();
  };
  const text =
    "Vendo que os Deuses não esqueceram dela, Sigrid se sente feliz sentindo um calor que a dias havia desaparecido do seu coração, sua pele que já estava pálida começou a tomar cor, seu cabelo negro que quase já estava todo grisalho aos poucos voltou a tomar cor. Vendo aquilo, Vidar diz:\n\n- Eu não esperaria menos determinação de algum dos poucos humanos que andaram em Álfheim, o Reino do Elfos. O único porém é que Hel não deixa qualquer alma simplesmente sair daqui, ela criou uma regra para que eu possa lhe ajudar, preciso te fazer 3 perguntas e você precisará acertar cada uma delas, mas creio que você será capaz.\n\nVidar puxa um pequeno pergaminho que estava em seu gibão o abre e pergunta:\n\n- Podemos começar?";
  document.getElementById("game-flow-paragraph").innerText = text;
}

function level1_3() {
  var answer = prompt(
    "Você está em Helheim por apenas um motivo, que é o motivo por quê normalmente a maioria das almas está aqui, qual é este motivo?\nMorte sem glória\nVaidade\nBruxaria"
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "morte sem glória" && atempts < 3) {
    answer = prompt(
      `Vamos! Essa é muito fácil, você tem mais ${
        3 - atempts
      } para acertar.\n\nQual é o motivo de você ter vindo parar em Helheim?\nMorte sem glória\nVaidade\nBruxaria`
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
    document.getElementById("game-flow-title").innerText = "Você acertou!";
    document.getElementById("game-flow-paragraph").innerText =
      "Vidar dá um sorriso de canto de boca e diz:\n\n- Sabia que iria acertar! Os Vanir e os Aesir não entrariam em um consenso para eu vir até aqui, para então você errar.\n\nSigrid pergunta ao Aesir:\n\n- Os Vanir e os Aesir entraram em consenso?\n\n- A mesma que os separou acabou por os unir novamente, meio nobre não? Gullveig chegou a conversar com a própria Hel para liberar a sua alma, a Deusa Vanir realmente não te quer aqui. Uniu os dois clãs para buscar a sua alma.\n\nVidar aponta para Yggdrasil ainda distante e exclama:\n\nPrecisamos nos apressar nem sempre Heimdallr é conveniente comigo, não sabemos quanto tempo a passagem se manterá aberta. pela Bifrost.";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "../pages/sigridLevel2.html";
    };
  }
}

window.onload = level1;
