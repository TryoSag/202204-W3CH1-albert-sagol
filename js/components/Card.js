import King from "../characters/King.js";
import Fighter from "../characters/Fighter.js";
import Squire from "../characters/Squire.js";
import Advisor from "../characters/Advisor.js";

class Card {
  element;
  constructor(character) {
    this.element = document.createElement("li");
    this.element.className = "character col";
    this.character = character;
    this.element.innerHTML = `               
          <div class="card character__card">
            <img
              src='img/${this.character.name}.jpg'
              alt='${this.character.name} ${this.character.family}'
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${
                this.character.name
              } ${this.character.family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.character.age} años</li>
                  <li>
                    Estado:
                    ${
                      this.character.alive
                        ? `<i class="fas fa-thumbs-up"></i>`
                        : `<i class="fas fa-thumbs-down"></i>`
                    }
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  ${
                    this.character instanceof King
                      ? `<li>Años de reinado:  ${this.character.yearsOfReign} </li>`
                      : ""
                  }
                  ${
                    this.character instanceof Fighter
                      ? `<li>Arma: ${this.character.weapon}</li>
                    <li>Destreza: ${this.character.dexterity}</li>`
                      : ""
                  }
                  ${
                    this.character instanceof Advisor
                      ? `<li>Asesora a: ${this.character.advise.name}</li>`
                      : ""
                  }
                  ${
                    this.character instanceof Squire
                      ? `<li>Peloteo: ${this.character.pelotim}</li>
                    <li>Sirve a: ${this.character.serves.name}</li>`
                      : ""
                  }
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji">${this.character.emoji}</i>
          </div>
        </li>            
    `;
  }
}

export default Card;
