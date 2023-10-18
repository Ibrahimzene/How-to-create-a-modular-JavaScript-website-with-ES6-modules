import { sentencize, repleceAll }from './tools.js';
import { Header } from '../components/headers.js';
const sentencize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1)+'.';
};
const btnInfoElem = document.querySelector(".btnInfo");
const appElem = document.querySelector("#app");

btnInfoElem.addEventListener("click", () => {
  const messageElem = document.querySelector(".message");
  messageElem.innerHTML = sentencize(repleceAll)('this is a test message', 'and it is a test message');

});