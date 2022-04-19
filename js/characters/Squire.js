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
    characterServes
  ) {
    super(squireName, squireFamily, squireAge);
    this.pelotism = Squire.pelotismFilter(pelotismValue);

    if (characterServes instanceof Fighter) {
      this.serves = characterServes;
    }
  }

  static pelotismFilter(pelotismLevel) {
    if (pelotismLevel < 0) {
      return 0;
    }
    if (pelotismLevel > 10) {
      return 10;
    }
    return pelotismLevel;
  }

  talk() {
    return `${super.talk()}Soy un loser`;
  }
}

export default Squire;
