var frases = [
  "A vitória pertence ao mais perseverante.",
  "Conhece teu inimigo e conhece a ti mesmo, e em cem batalhas não correrás nenhum perigo.",
  "O essencial é invisível aos olhos, mas não à inteligência.",
  "Foco é dizer não para centenas de boas ideias.",
  "A inteligência consiste não apenas no conhecimento, mas também na habilidade de aplicá-lo.",
  "O mais poderoso dos guerreiros são a paciência e o tempo.",
  "A estratégia sem tática é o caminho mais lento para a vitória. Tática sem estratégia é o ruído antes da derrota."
];

var counter = 0;

function exibitMensagem() {
  let frasePadrao = document.getElementById("frase");
  
  frasePadrao.innerHTML = frases[counter];
  
  counter++;
  
  if (counter >= frases.length) {
    counter = 0; // volta ao começo
  }
}
