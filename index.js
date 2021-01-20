const getElement = (selector) => {
  return document.querySelector(selector);
};

const getRandomValue = () => {
  return Math.floor(Math.random() * 80);
};

getElement('#interative-word').style.left = `${getRandomValue()}%`;
getElement('#interative-word').style.top = `${getRandomValue()}%`;

let tries = 0;

getElement('#interative-word').addEventListener('mouseover', ({ target: { style }, target }) => {
  tries ++;
  style.left = `${getRandomValue()}%`;
  style.top = `${getRandomValue()}%`;
  if (tries > 10) target.innerHTML = 'Ta dificil? Tenta mais'
  if (tries > 20) target.innerHTML = 'Melhor desistir hein'
});

getElement('#interative-word').addEventListener('click', ({ target }) => {
  tries = 0;
  target.innerHTML = 'Duvido clicar em mim'
  alert('Parabéns! Conseguiu clicar!');
});