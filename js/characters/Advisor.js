import Character from "./Character.js";

class Advisor extends Character {
  advise;

  constructor(
    advisorName,
    advisorFamily,
    advisorAge,
    advisorCharacter,
    advisorEmoji
  ) {
    super(advisorName, advisorFamily, advisorAge, advisorEmoji);

    if (advisorCharacter instanceof Character) {
      this.advise = advisorCharacter;
    }
  }

  talk() {
    return `${super.talk()}No sé por qué, pero creo que voy a morir pronto`;
  }
}

export default Advisor;
