'use strict'

const elementosAnimados = document.querySelectorAll(
    '.grupo-habilidades, .card-projeto, .item-formacao, .header-conteudo'
);

// Cria um "observador" que detecta quando o elemento entra na tela
const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            // Adiciona a classe que torna o elemento visível
            entrada.target.style.opacity = '1';
            entrada.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Aplica o estilo inicial (invisível) e começa a observar cada elemento
elementosAnimados.forEach(function (elemento) {
    elemento.style.opacity = '0';
    elemento.style.transform = 'translateY(20px)';
    elemento.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observador.observe(elemento);
});