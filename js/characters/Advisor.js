import Character from "./Character.js";

class Advisor extends Character {
  advise;

  constructor(advisorName, advisorFamily, advisorAge, advisorCharacter) {
    super(advisorName, advisorFamily, advisorAge);

    if (advisorCharacter instanceof Character) {
      this.advise = advisorCharacter;
    }
  }

  talk() {
    return `${super.talk()}No sé por qué, pero creo que voy a morir pronto`;
  }
}

export default Advisor;
