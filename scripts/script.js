var charUrl = "";

function playGame() {
  document.getElementById("game-menu").style.display = "none";
}
ygg;
function playSigrid() {
  let charScope =
    "Sigrid nasceu sob a marca de Gullveig a Deusa Vanir bruxa, a qual  foi queimada por três vezes e três vezes renasceu, dando a Sigrid sua força e coragem. Antes de uma batalha em seu vilarejo, ela foi nomeada a emissária dos Deuses, e cabia a ela realizar sacrifícios e pedir as divindades proteção e bênçãos para o confronto que estava por vir, após as cerimônias, tanto ela quantos todos os cidadão foram chamados para um banquete no casarão do Jarl Bjorn, após comer e beber, ela voltou para casa sozinha e embriagada, no caminho da floresta apenas sentiu o uma agulhada nas costas que queimava como ferro quente, caiu no chão gelado sem conseguir gritar e nem ver quem tinha a atacado. Ela foi assassinada e sem honrarias acabou indo para Helheim, o Reino dos Mortos. Ela vagou por dias em meio a um deserto escuro, onde as almas vagavam, sem expressões nos seus rostos seguindo todos um caminho até uma gigantesca águia que os devorava em uma só bicada, ela se recusou a seguir o mesmo caminho até que viu um homem que de longe chamava seu nome.";
  alert("Você escolheu jogar com a Sigrid!");
  document.getElementById("char-selector").style.display = "none";
  document.getElementById("game-flow-title").innerText = "Jogando com Sigrid";
  document.getElementById("game-flow-paragraph").innerText = charScope;
  charUrl = "./pages/sigridLevel1.html";
}

function playLiv() {
  let charScope =
    "A jovem Liv estava na sua primeira batalha, ela era tão boa com a espada que era chamada de Valquíria por todos de seu pequeno vilarejo, naquela manhã ela sentia o vento frio bater no seu rosto enquanto as trombetas dos inimigos soavam ao longe, a terra tremia a cada passo da marcha marcial longínqua. A menina estava junto com a fileira de vanguarda, com seu escudo levantado esperando os inimigos surgirem ao topo da colina à sua frente. Cada guerreiro da linha de frente gritava e esbravejava palavras de vitória, alguns pediam ajuda aos Deuses, outros clamavam a Odin para serem recebidos em Valhalla ao fim daquele dia, aquilo deixava a jovem Liv em pânico. Depois de uma longa espera os barulhos se cessaram, e só foi possível ouvir um único som, a trombeta que iniciava a batalha seguido de sons agudos e uma ordem vinda de seu Jarl que gritava: “SARAIVADA PROTEJAM-SE”. Uma nuvem escura começou a sobrevoar sob as tropas, a garota olhando aquilo em pleno choque por nunca ter sequer sentido o cheiro da batalha ficou atônita esperando o cair das flechas sem ao menos levantar seu escudo, a última coisa que se lembra é uma flecha acertando seu ombro.";

  alert("Você escolheu jogar com a Liv!");
  document.getElementById("char-selector").style.display = "none";
  document.getElementById("game-flow-title").innerText = "Jogando com Liv";
  document.getElementById("game-flow-paragraph").innerText = charScope;
  charUrl = "./pages/livLevel1.html";
}

function playBjorn() {
  let charScope =
    "Björn estava entre todos os outros que morreram sem dignidade, olhava a sua volta e reconhecia vários rostos, eram também companheiros de batalha. Quando percebeu que estava morto começou a decorrer do que tivera acontecido, já que quase não se lembrava de como morreu, mas ao pensar que não estava se banqueteando com os Deuses, lhe fazia sentir ojeriza de tudo aquilo, pensava consigo mesmo, como pode morrer sem dignidade tendo lutado mais de 20 batalhas, tendo matado mais de 100 homens? Tudo aquilo era muito confuso para sí. Quando tomou por conta seguia com uma multidão em direção a uma grande águia que devorava as almas dos perdidos de centenas e centenas por vez, era uma ave enorme que tinha 10 vezes o tamanho de um návio, ele olhou em volta e viu que algumas almas que estavam no meio de um vale corriam as direção as montanhas que o cercavam, tentando fugir do fim eterno. Björn seguiu os seus instintos e começou a correr e logo encontrou uma caverna e logo entrou, quando mais ele corria mais escuro ficava até o momento que ele estava simplesmente correndo no total escuro, bateu com uma cabeça em uma pedra e apagou.";
  alert("Você escolheu jogar com o Björn!");
  document.getElementById("char-selector").style.display = "none";
  document.getElementById("game-flow-title").innerText = "Jogando com Björn";
  document.getElementById("game-flow-paragraph").innerText = charScope;
  charUrl = "./pages/bjornLevel1.html";
}
