function level3() {
  document.getElementById("game-button").innerText = "Responder";
  document.getElementById("game-button").onclick = () => {
    level3_2();
  };
  const startText = `Ao chegar na grande raiz Liv fica vislumbrada com tamanha beleza em um ambiente tão inospito, um grande portal em volto de raizes a jovem podia ver seu vilarejo, ele vai correndo em direção ao lugar e antes que chegasse um pé a derruba, e Loki diz:\n\n- Acha que vai me enganar? Eu disse três perguntas para que você pudesse voltar. Eu quero que você volte, eu quero ganhar, mas isso precisa ser justo...\n\nLiv diz:\n\n- Por um segundo eu pensei que não voltaria para casa, você é o Deus da trapaça não é, nada te impede de me enganar.\n\n- Bem pensado garota, porém apostas são apostas e eu odeio perder. Vamos a última pergunta! `;

  document.getElementById("game-flow-paragraph").innerText = startText;
}

function level3_2() {
  var answer = prompt(
    "Qual o nome do meu irmão que está morto em Helheim? \nVidar  \nBaldur \nThor"
  );

  let atempts = 1;

  while (answer.toLowerCase() !== "baldur" && atempts < 3) {
    answer = prompt(
      `Poxa! Não me decepcione assim, você tem ${
        3 - atempts
      } chance(s).\n\nQual dos meus irmãos está morto em Helheim? Dica eu não derramei uma lágrima por ele. \nVidar  \nBaldur \nThor`
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
      "Apesar de todo o nosso imbroglio aqui embaixo você conseguiu acertar as três perguntas, e nenhum sinal do meu irmão, então eu acho que ganhei! Isso me deixa muito feliz, vamos ande até o portal, o caminho atráves daqui até Midgard irá passar em um piscar de olhos.\n\nLiv começa a andar com um passo acelerado até o portal, toda a escuridão de Helheim começa a ficar para a trás uma luz começa a tomar conta do seu coração, ela colocar o pé direito dentro do portal e...";
    document.getElementById("game-button").innerText = "Próximo";
    document.getElementById("game-button").onclick = () => {
      level3_3();
    };
  }
}

function level3_3() {
  document.getElementById("game-flow").style.backgroundImage =
    "url('https://berloga-workshop.com/cache/cache_image/b/bc51d99542dfac8590e17ff356454658.png')";
  document.getElementById("game-flow-title").innerText = "O Deus da Trapaça!";
  document.getElementById("game-flow-paragraph").innerText =
    "...quando dá o primeiro passo, tudo desaparece como uma névoa cor de ouro, e atrás da garota se ouvem gargalhadas profundas vindas do Deus. Em meio aos risos de Loki, Liv cai aos prantos percebendo que tinha sido vítima do Aesir da mentira, e exclama:\n\n- ESSA ERA A SUA INTENÇÃO DESDE O INÍCIO? ME FAZER DE TOLA, ME FAZER ACREDITAR EM VOCÊ!\n\nO semblante do Deus muda rapidamente ficando com um tom sério e macabro:\n\n- Como poderia eu trair uma traidora? As memórias em Helheim ficam vagas, mas não tão rápido assim, já esqueceu o que fez? Como traiu aquela que tinha você como única amiga e tudo pelo quê? Cíumes? Por ser mais inteligente quê você? Por ela ter sido escolhida como a emissárias dos Deuses na sua vila? São muitos motivos...";
  document.getElementById("game-button").innerText = "Próximo";
  document.getElementById("game-button").onclick = () => {
    level3_4();
  };
}

function level3_4() {
  document.getElementById("game-flow-title").innerText = "O Deus da Trapaça!";
  document.getElementById("game-flow-paragraph").innerText =
    "\n\nO Deus bufa e continua:\n\n- Você já deveria saber eu sou o Deus da Trapaça, da mentira, até mesmo o Deus dos problemas, mas não sou o Deus dos assassinos!\n\nLiv continua aos prantos, enquanto o Deus continua seu sermão:\n\n- Você tinha potencial, mas o desperdicou com ambições pequenas, e todos nós pagamos o preço pelo nossos atos, menos eu é claro, vou deixar um presente para lhe consolar.\n\nO Deus deixa a adaga que estava em suas mãos e diz:\n\n- Essa é a mesma arma que usou para matar sua amiga, talvez isso possa te proteger por aqui.\n\nNum piscar de olhos Loki some em meio a uma névoa cor de ouro, deixando Liv sozinha para vagar por Helheim.";
  document.getElementById("game-button").innerText = "Próximo";
  document.getElementById("game-button").onclick = () => {
    level3_5();
  };
}

function level3_5() {
  document.getElementById("game-flow").style.backgroundImage =
    "url('https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_820/v1528372367/content-items/002/383/259/details03-original.jpg?1528372367')";
  document.getElementById("game-flow-title").innerText = "Um final Chocante!";
  document.getElementById("game-flow-paragraph").innerText =
    "As vezes não adianta o que fazemos para chegar até o final, alguns fantasmas do passado sempre estarão lá para nos atormentar.\n\nInfelizmente Liv precisou pagar pelos seus atos e um Aesir pessoalmente resolveu dar a penitência.\n\nObrigado por jogar!! Caso não tenha jogado as outras histórias, o botão abaixo te levará para a página inicial novamente.\n\n\nJogo Desenvolvido por Simone Luiz.";
  document.getElementById("game-button").innerText = "Voltar ao início";
  document.getElementById("game-button").onclick = () => {
    location.href = "../index.html";
  };
}

window.onload = level3;
