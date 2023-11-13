//Posição e tamanho da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 25;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variaveis da Raquete Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let colidiu = false; 

//placar do jogo 
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();
  verificaColisao();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
}

//Desenho da Bolinha
function mostraBolinha() {
  fill("whith");
  circle(xbolinha, ybolinha, diametro);
}

function movimentaBolinha() {
  xbolinha += velocidadeXbolinha;
  ybolinha += velocidadeYbolinha;
}

function verificaColisaoBorda() {
  if (xbolinha > width || xbolinha < 0) {
    velocidadeXbolinha *= -1;
  }
  if (ybolinha > height || ybolinha < 0) {
    velocidadeYbolinha *= -1;
  }
}

function mostraRaquete() {
  fill("red");
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, 15);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisao() {
  if (
    xbolinha - raio < xRaquete + raqueteComprimento &&
    ybolinha - raio < yRaquete + raqueteAltura &&
    ybolinha + raio > yRaquete
  ) {
    velocidadeXbolinha *= -1;
  }
}

function mostraRaqueteOponente() {
  fill("blue");
  rect(
    xRaqueteOponente,
    yRaqueteOponente,
    raqueteComprimento,
    raqueteAltura,
    15
  );
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = ybolinha - yRaqueteOponente - raqueteAltura / 2;
  yRaqueteOponente += velocidadeYOponente;
}

function verificaColisaoRaqueteOponente() {
  colidiu = collideRectCircle(
    xRaqueteOponente,
    yRaqueteOponente,
    raqueteComprimento,
    raqueteAltura,
    xbolinha,
    ybolinha,
    raio
  );
  if (colidiu == true) {
    velocidadeXbolinha *= -1;
  }
}
