'use strict'

const elementosAnimados = document.querySelectorAll(
    '.grupo-habilidades, .card-projeto, .item-formacao, .header-conteudo, .img-profile'
)

const prefereReducao = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.remove('animate-hidden');
            entrada.target.classList.add('animate-visible');
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.1 });

elementosAnimados.forEach(function (elemento) {
    if (!prefereReducao) {
        elemento.classList.add('animate-hidden');
    }
    observador.observe(elemento);
});