"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Função para calcular a média das notas
function calcularMedia(notas) {
    const total = notas.reduce((sum, nota) => sum + nota, 0);
    return total / notas.length;
}
// Cria uma instância do prompt-sync para capturar entradas do usuário
const prompt = (0, prompt_sync_1.default)();
// Solicita o nome do aluno e as 4 notas
const nome = prompt('Digite o nome do aluno: ');
const notas = [];
for (let i = 1; i <= 4; i++) {
    const nota = parseFloat(prompt(`Digite a nota ${i} (0 a 10): `));
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log('Nota inválida. Por favor, digite um valor entre 0 e 10.');
        i--;
        continue;
    }
    notas.push(nota);
}
// Calcula a média das notas
const media = calcularMedia(notas);
// Cria o objeto do aluno com os detalhes
const aluno = {
    nome,
    notas,
    media,
};
// Exibe o objeto aluno no console
console.log(aluno);
