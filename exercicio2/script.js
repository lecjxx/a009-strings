const minhaString = "Eu não sou supersticioso, mas sou um pouco ________."

//A partir dela, execute os passos abaixo:

//a) Remova o excesso de espaços no final da string;

const semespaco = minhaString.trim();

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

console.log(`A String possui ${semespaco.length} caracteres, após remover os espaços fica ${semespaco.length}`);

//c) Substitua os traços `________` por “sticioso”.

const novaString = minhaString.replace("________", "sticioso")
console.log(novaString);