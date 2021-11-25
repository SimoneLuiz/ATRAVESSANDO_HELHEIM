function level3() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level3_2();
  };
  const startText = `Vidar olha com um semblante leve para Sigrid e diz:\n\n- Antes de fazê-la preciso dizer que eu admiro você, não é qualquer um que morre e tem a chance de voltar e não pensaria em vingança, eu não tinha dúvidas quanto a sua índole, mas até mesmo os justos e gentís tendem a experimentar o doce sabor da vingaça. De todo modo... - Diz o Aesir enquanto retira novamente o pergaminho de seu Gibão - Temos que completar as tarefas de Freya, e acho que essa pergunta vai ser a mais dificíl de todas. Então pense com sabedoria, estamos a poucos passos Glitnir o palácio de ouro do Forseti. Está preparada?`;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level3_2() {
  var answer = prompt(
    "Qual foi a Deus que foi queimada três vezes e três vezes renasceu? \nGullveig  \nFrygg \nHel"
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "gullveig" && atempts < 3) {
    answer = prompt(
      `Estamos quase no fim! Você tem ${
        3 - atempts
      } chance(s).\n\n"Qual foi a Deus que foi queimada três vezes e três vezes renasceu? \nnGullveig  \nFrygg \nHel`
    );
    atempts++;
  }

  if (atempts > 2) {
    document.getElementById("game-flow").style.backgroundImage =
      "url('https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1528372367/content-items/002/383/259/details03-original.jpg?1528372367')";
    document.getElementById("game-flow-title").innerText = "Game Over!";
    document.getElementById("game-flow-paragraph").innerText =
      "Desse jeito você nunca irá sair de Helheim.\n\nVocê estava tão perto, que tristesa!\n\nA escuridão de Helheim te domina e você se torna mais uma das almas errantes, sendo levada para longe de Yggdrasil.\n\nLoki ficou decepcionado por ter apostado em você!";
    document.getElementById("game-button").innerText = "Voltar ao início";
    document.getElementById("game-button").onclick = () => {};
  } else {
    document.getElementById("game-flow-title").innerText =
      "Você acertou a última pergunta!";
    document.getElementById("game-flow-paragraph").innerText =
      "Quando Sigrid acerta a última pergunta a gigantesca porta dourada se abre lentamente, um alto som de ranger toma conta do lugar, o cheiro de porco assado, o cheiro de hidromel tomava o ar, as luzes e trombetas soavam e um anúncio distante dizia:\n\n- Saúdem Sigrid nascida sob o símbolo de Gullveig, emissária de Handum e agora resnacida das cinzas.\n\nNo meio do grande portão estava um velho homem, de cabelo e barba longos e brancos, apesar da idade tinha uma aparência inspiradora, com túnicas douradas e segurando um cajado, além de uma postura invejável, aquele era Forseti o Deus da Jústica, também conhecido como o Anfitrião nos poemas e canções dos antigos. Ele levanta a mão esquerda e diz:\n\n- Olá Sigrid, eu a aguardava ansiosamente, você tem uma boa intercessora, e em meio a uma nuvem escura que pairou no salão surgiu uma figura de uma mulher, de cabelos loiros e longos, e em volta dela brilhava uma luz negra.";
    document.getElementById("game-button").innerText = "Próximo";
    document.getElementById("game-button").onclick = () => {
      level3_3();
    };
  }
}

function level3_3() {
  document.getElementById("game-flow").style.backgroundImage =
    "url('https://miro.medium.com/max/480/1*3rFRP69YSnIAs4C2zvsIiQ.jpeg')";
  document.getElementById("game-flow-title").innerText = "A Deusa Bruxa!";
  document.getElementById("game-flow-paragraph").innerText =
    "Sigrid foi lentamente entrando no palácio, ainda com medo pelo tamanho esmero que os Deuses tiveram com ela. Passo a passo ela foi entrando e o Salão apenas dava a impressão de ser maior e maior, Forseti tinha se sentado em seu trono Dourado, e a figura da Bruxa continuava pairando sobre o lugar, e dizia quase que como um sussuro dentro da cabeça de Sigrid.\n\n-Venha! Venha! Venha...\n\nMais próximo de Gullveig ela ficava, mais baixos ficavam os sussuros, quando estava ela diante da Vanir, que começou a ouvir:\n\n- Obrigado Sigrid, agradeço todos os cuidados que tivera por mim durante todos esses anos, cada ritual que fez foi importante para todos nós aqui em cima. Normalmente nós não ajudamos as pessoas, mas cada um de nós temos alguns preferidos. O que houve com você foi uma tremenda injustiça, e por isso estou aqui para lhe ajudar. - E continuou - Eu reuni, o Deus da Justiça, a Deusa da Morte e o Deus da Trapaça para te ajudar daqui em diante.\n\n- Antes que a Vanir concluísse, Sigrid pergunta\n\n- O Deus da trapaça?";
  document.getElementById("game-button").innerText = "Próximo";
  document.getElementById("game-button").onclick = () => {
    level3_4();
  };
}

function level3_4() {
  document.getElementById("game-flow-title").innerText = "";
  document.getElementById("game-flow-paragraph").innerText =
    "Forseti se levanta de seu trono e diz:\n\n- Ele será necessário de formas que você ainda não entende. - O Aesir olha para Gullveig enquanto esboça um sorriso.\n\n- É importante que você entenda que tudo tem um preço. - Diz a Vanir - O que houve com você, uniu os Aesir e os Vanir para nos preparar para os tempos sombrios que nos aguarda. Cada vez menos adoradores irá levar o mundo a iniciar o Ragnarok, aqueles que são abençoados pelos Deuses precisar continuar vivos em Midgard. - Ela olha diretamente nos olhos de Sigrid e diz - Você precisa entender que terá que pagar um preço.\n\n- Na volta para Midgard precisará encontrar sua assassina Liv, a mesma garota do seu vilarejo que usou da sua morte para se auto-glorificar as pessoas a chamam de Valquiria, e o Jarl Björn que foi o primeiro a chegar encontrou a adaga de Liv em suas costas porém escondeu de todos de Handum.\n\n- Você terá que pagar com uma alma para Hel e uma Vingança para Vidar - Diz Gullveig e continua - Uma libertação para Forseti e uma enganação para Loki. E para mim a sua servidão eterna.\n\nSigrid olha nos olhos da Vanir e diz um longo 'Eu aceito'. Antes mesmo que consiga terminar a frase, ele acorda no leito de um rio em Midgar, quando sente o ar em seus pulmões e o sol sobre sua cabeça sorri, e levanta, mas dessa vez determinada em completar sua missão.";
  document.getElementById("game-button").innerText = "Próximo";
  document.getElementById("game-button").onclick = () => {
    level3_5();
  };
}

function level3_5() {
  document.getElementById("game-flow").style.backgroundImage =
    "url('https://niltonfelipe.files.wordpress.com/2012/10/midgard-03.jpg')";
  document.getElementById("game-flow-title").innerText = "Um final Revelador!";
  document.getElementById("game-flow-paragraph").innerText =
    "Todos os atos corretos que você toma, podem te levar para caminhos inesperados, mas aqueles que sempre andam na luz sempre terão alguém com quem contar.\n\nSigrid sempre foi Fiel e Leal aos Deuses que seguia por isso eles recompensaram seu trabalho com uma nova chance de viver.\n\nObrigado por jogar!! Caso não tenha jogado as outras histórias, o botão abaixo te levará para a página inicial novamente.\n\n\nJogo Desenvolvido por Simone Luiz.";
  document.getElementById("game-button").innerText = "Voltar ao início";
  document.getElementById("game-button").onclick = () => {
    location.href = "../index.html";
  };
}

window.onload = level3;
