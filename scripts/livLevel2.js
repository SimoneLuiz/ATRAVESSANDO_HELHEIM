function level2() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level2_2();
  };
  const startText = `Seguindo o caminho Loki cantarola, até que para e olha um enorme deserto cheio de almas errantes, e diz:\n\n- Sabia que Helheim é governado pela minha filha? Nem eu seria capaz de tanta crueldade. Aquela águia gigante se chama Hræsvelgr, o devorador de cadaveres. Isso é meio macabro não é?\n\nLiv bufa e pergunta:\n\n- Mas as almas não sentem dor não é?\n\nLoki olha para ela com um sorriso de canto de boca e diz:\n\n- Se quer tanto saber basta errar alguma pergunta...\n\nPor falar em pergunta lá vai!`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level2_2() {
  var answer = prompt("Qual o nome do meu Pai? \nOdin  \nVidar \nTyr");

  let atempts = 1;

  while (answer.toLowerCase() !== "odin" && atempts < 3) {
    answer = prompt(
      `Caramba você é ruim de memória, eu até já falei o nome dele para você, vou de tar mais ${
        3 - atempts
      } chance(s).\n\nQual o nome do meu glorioso e caolho Pai? \nOdin  \nVidar \nTyr`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1528372367/content-items/002/383/259/details03-original.jpg?1528372367')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
      "Desse jeito você nunca irá sair de Helheim.\n\nVocê nem mesmo sabe o nome do Pai de Todos!\n\nA escuridão de Helheim te domina e você se torna mais uma das almas errantes.\n\nLoki ficou decepcionado por ter apostado em você!";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {};
  } else {
    document.getElementById("game-flow-title").innerText =
      "Você acertou Novamente!";
    document.getElementById("game-flow-paragraph").innerText =
      "Loki continua andando até o que se parece uma raiz de uma enorme árvore brilhante e prateada:\n\n- Estamos quase chegando e você está quase lá, apenas mais uma pergunta lhe separa da vida e da morte. Deu um trabalhão conseguir tentar tirar você daqui Hel não é muito complacente com minhas brincadeiras.\n\nLoki aponta com sua adaga e diz:\n\n- Apresse o passo, acho que chegaremos primeiro do que Vidar e sua Bruxa .";
    document.getElementById("game-button").innerText = "Próximo Nível";
    document.getElementById("game-button").onclick = () => {
      location.href = "../pages/livLevel3.html";
    };
  }
}

window.onload = level2;
