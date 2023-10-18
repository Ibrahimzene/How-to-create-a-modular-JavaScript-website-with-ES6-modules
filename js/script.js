import * as tools from './tools.js';

const sentencize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1)+'.';
};
const btnInfoElem = document.querySelector(".btnInfo");


btnInfoElem.addEventListener("click", () => {
  const messageElem = document.querySelector(".message");
  messageElem.innerHTML = tools.sentencize('this is a test message');
});