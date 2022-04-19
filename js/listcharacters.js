import King from "./characters/King.js";
import Fighter from "./characters/Fighter.js";
import Squire from "./characters/Squire.js";
import Advisor from "./characters/Advisor.js";

const joffrey = new King("Joffrey", "Baratheon", 16, 2, "👑");
const jaime = new Fighter("Jaime", "Lannister", 45, "Espada", 7, "🗡");
const daenerys = new Fighter("Daenerys", "Targaryen", 30, "Dragones", 10, "🗡");
const tyrion = new Advisor("Tyrion", "Lannister", 40, daenerys, "🎓");
const bronn = new Squire("Bronn", "AguasNegras", 54, 0, jaime, "🛡");

const listOfCharacters = [joffrey, jaime, daenerys, tyrion, bronn];

export default listOfCharacters;
