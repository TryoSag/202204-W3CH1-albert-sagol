import Character from "./Character.js";

class Fighter extends Character {
  weapon;
  dexterity;

  constructor(
    fighterName,
    fighterFamily,
    fighterAge,
    fighterWeapon,
    fighterDexterity
  ) {
    super(fighterName, fighterFamily, fighterAge);
    this.weapon = fighterWeapon;
    this.destreza = Fighter.dexterityFilter(fighterDexterity);
  }

  static dexterityFilter(dexterityValue) {
    if (dexterityValue < 0) {
      return 0;
    }
    if (dexterityValue > 10) {
      return 10;
    }
    return dexterityValue;
  }

  talk() {
    return `${super.talk()}Primero pego y luego pregunto`;
  }
}

export default Fighter;
