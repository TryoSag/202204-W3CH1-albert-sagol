class Character {
  name;
  family;
  age;
  emoji;
  alive = true;
  serie = "Juego de Tronos";

  constructor(characterName, characterFamily, characterAge, characterEmoji) {
    this.name = characterName;
    this.family = characterFamily;
    this.age = characterAge;
    this.emoji = characterEmoji;
  }

  talk() {
    return `${this.name} dice: `;
  }

  dead() {
    this.alive = false;
  }
}

export default Character;
