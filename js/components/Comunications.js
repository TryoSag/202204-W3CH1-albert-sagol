class Comunications {
  element;

  constructor(character) {
    this.element = document.createElement("div");
    this.element.className = "comunications";
    this.character = character;
    this.element.innerHTML = `
      <p class="comunications__text display-1">${this.character.talk()}</p>
      <img
      class="comunications__picture"
      src='img/${this.character.name}.jpg'
      alt='${this.character.name} ${this.character.family}'
      />`;
  }
}

export default Comunications;
