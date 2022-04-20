import Character from "./Character.js";

class King extends Character {
  yearsOfReign;

  constructor(kingsName, kingFamily, kingAge, kingYearsOfReign, kingEmoji) {
    super(kingsName, kingFamily, kingAge, kingEmoji);
    this.yearsOfReign = kingYearsOfReign;
  }

  talk() {
    return `${super.talk()}Vais a morir todos`;
  }
}

export default King;
