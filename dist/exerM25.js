class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}
const guilherme = new Aluno('guilherme', 5.0);
const julia = new Aluno('Julia', 3.0);
const leonardo = new Aluno('Leonardo', 7.0);
const eduarda = new Aluno('Eduarda', 8.0);

const alunos = [guilherme, julia, leonardo, eduarda];

const aprovados = alunos.filter(function (item) {
    return item.nota >= 6;
});
const reprovados = alunos.filter(function (item) {
    return item.nota < 6;
});

console.log(aprovados);
console.log(reprovados);