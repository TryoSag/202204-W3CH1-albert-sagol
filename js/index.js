import Card from "./components/Card.js";
import listOfCharacters from "./listcharacters.js";

const characterList = document.querySelector(".characters-list");
const actualChar = listOfCharacters;

for (let i = 0; i < actualChar.length; i++) {
  const newCharacter = new Card(actualChar[i]);
  characterList.append(newCharacter.element);
}
