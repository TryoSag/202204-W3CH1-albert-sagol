import Character from "./Character.js";
import Fighter from "./Fighter.js";

class Squire extends Character {
  serves;
  pelotism;

  constructor(
    squireName,
    squireFamily,
    squireAge,
    pelotismValue,
    characterServes,
    squireEmoji
  ) {
    super(squireName, squireFamily, squireAge, squireEmoji);
    this.pelotismValue = pelotismValue;
    this.pelotism = this.pelotismFilter();

    if (characterServes instanceof Fighter) {
      this.serves = characterServes;
    }
  }

  pelotismFilter() {
    if (this.pelotismValue < 0) {
      return 0;
    }
    if (this.pelotismValue > 10) {
      return 10;
    }
    return this.pelotismValue;
  }

  talk() {
    return `${super.talk()}Soy un loser`;
  }
}

export default Squire;
