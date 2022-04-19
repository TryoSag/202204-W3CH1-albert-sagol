import Character from "./Character.js";

class King extends Character {
  yearsOfReign;

  constructor(kingsName, kingFamily, kingAge, kingYearsOfReign) {
    super(kingsName, kingFamily, kingAge);
    this.yearsOfReign = kingYearsOfReign;
  }

  talk() {
    return `${super.talk()}Vais a morir todos`;
  }
}

export default King;
