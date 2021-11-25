function level3() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level3_2();
  };
  const startText = `Hel agora com os pés nos chão diz que entende os motivos do homem e que a última seria a mais fácil das tarefas. Depois de um longo corredor eles chegam até uma porta que era cercada de raízes cor de prata. E ela diz:\n\n- Agora a decisão de voltar é sua o que cabe a você é, viver uma vida gloriosa lembrando que as vezes é melhor ser verdadeiro do que um monstro.`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level3_2() {
  var answer = prompt("Seguir em frente? Sim  \nNão");

  let atempts = 1;

  while (answer.toLowerCase() !== "sim" && atempts < 3) {
    answer = prompt(
      `Tem certeza? Te darei mais ${
        3 - atempts
      } chance(s).\n\n""Seguir em frente? \Sim  \nNão`
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
      "Você acertou a última pergunta!";
    document.getElementById("game-flow-paragraph").innerText =
      document.getElementById("game-button").innerText = "Próximo";
    document.getElementById("game-button").onclick = () => {
      level3_3();
    };
  }
}

function level3_3() {
  document.getElementById("game-flow").style.backgroundImage =
    "url('https://niltonfelipe.files.wordpress.com/2012/10/midgard-03.jpg')";
  document.getElementById("game-flow-title").innerText = "Um final Feliz!";
  document.getElementById("game-flow-paragraph").innerText =
    "Mesmo que a gente erre sempre há possibilidade de nos redimir dos nossos erros.\n\nBjörn não pensou apenas em si ao esconder a morte de Sigrid, e por sido teve a chance de ser perdoado.\n\nObrigado por jogar!! Caso não tenha jogado as outras histórias, o botão abaixo te levará para a página inicial novamente.\n\n\nJogo Desenvolvido por Simone Luiz.";
  document.getElementById("game-button").innerText = "Voltar ao início";
  document.getElementById("game-button").onclick = () => {
    location.href = "../index.html";
  };
}

window.onload = level3;
