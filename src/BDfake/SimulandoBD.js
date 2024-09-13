// Simulando um banco dados
import Animal from "../Animal.js";
import Recinto from "../Recintos.js";

const leao = new Animal("LEAO", 3, ["savana"], "CARNIVORO");
const leopardo = new Animal("LEOPARDO", 2, ["savana"], "CARNIVORO");
const crocodilo = new Animal("CROCODILO", 3, ["rio"], "CARNIVORO");
const macaco = new Animal("MACACO", 1, ["savana", "floresta"], "HERBIVORO");
const gazela = new Animal("GAZELA", 2, ["savana"], "HERBIVORO");
const hipopotamo = new Animal("HIPOPOTAMO", 4, ["savana", "rio"], "HERBIVORO");

const animais = [leao, leopardo, crocodilo, macaco, gazela, hipopotamo]

const recinto1 = new Recinto(1, 10, ["savana"], [macaco], 3);
const recinto2 = new Recinto(2, 5, ["floresta"], [], 0);
const recinto3 = new Recinto(3, 7, ["savana", "rio"], [gazela], 2);
const recinto4 = new Recinto(4, 8, ["rio"], [], 0);
const recinto5 = new Recinto(5, 9, ["savana"], [leao], 3);

const recintos = [recinto1, recinto2, recinto3, recinto4, recinto5]



export { recintos, animais };