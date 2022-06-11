const getElement = (selector) => {
  return document.querySelector(selector);
};

const getRandomValue = (max) => {
  return Math.floor(Math.random() * max);
};

const trueOrFalse = (percentage) => {
  return getRandomValue(100) <= percentage;
};

window.oncontextmenu = () => {
  getElement('#container').classList.add('show-error');
  setTimeout(() => {
    getElement('#container').classList.remove('show-error');
  }, 1000);
  return false;
}

getElement('#interative-word').style.left = `${getRandomValue(80)}%`;
getElement('#interative-word').style.top = `${getRandomValue(80)}%`;

getElement('#interative-word').addEventListener('mouseover', ({ target: { style }, target }) => {
  style.left = `${getRandomValue(80)}%`;
  style.top = `${getRandomValue(80)}%`;
  style.transform = trueOrFalse(40) ? `rotateZ(${trueOrFalse(50) ? '' : '-'}${getRandomValue(90) * 4}deg)` : 'rotateZ(0deg)'
  
  if (tries > 10) target.innerHTML = '<span>Ta dificil? Tenta mais</span>'
  if (tries > 20) target.innerHTML = '<span>Melhor desistir hein</span>'
});

getElement('#interative-word').addEventListener('click', ({ target }) => {
  alert('Parabéns! Conseguiu clicar! Mas não se anima. Vou voltar mais rápido.');
});