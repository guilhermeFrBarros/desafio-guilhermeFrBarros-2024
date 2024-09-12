/*

    import Animal from "./Animal.js";
    import Recinto from "./Recintos.js";

    Simulando um banco dados

    const leao = new Animal("LEAO", 3, ["savana"], "CARNIVORO");
    const leopardo = new Animal("LEOPARDO", 2, ["savana"], "CARNIVORO");
    const crocodilo = new Animal("CROCODILO", 3, ["rio"], "CARNIVORO");
    const macaco = new Animal("MACACO", 1, ["savana", "floresta"], "HERBIVORO");
    const gazela = new Animal("GAZELA", 2, ["savana"], "HERBIVORO");
    const hipopotamo = new Animal("HIPOPOTAMO", 4, ["savana", "rio"], "HERBIVORO");

    const animais = [leao, leopardo, crocodilo, macaco, gazela, hipopotamo]

    const recinto1 = new Recinto(1, 10, ["savana"], ["MACACO"], 3);
    const recinto2 = new Recinto(2, 5, ["floresta"], [], 0);
    const recinto3 = new Recinto(3, 7, ["savana", "rio"], ["GAZELA"], 2);
    const recinto4 = new Recinto(4, 8, ["rio"], [], 0);
    const recinto5 = new Recinto(5, 9, ["savana"], ["LEAO"], 3);

    const recintos = [recinto1, recinto2, recinto3, recinto4, recinto5]
*/
import { recintos, animais } from './BDfake/SimulandoBD.js';

class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        try {
            if (quantidade < 1) { throw { erro: "Quantidade inválida" } }
            const animalObjeto = buscandoAnimalPorEspecie(animal, animais);
            const recintosPossiveis = encontraRecintoPorDieta(animalObjeto, recintos);


        } catch (e) {
            console.log(e);
            return e;
        }


    }

}

function buscandoAnimalPorEspecie(animalParan, animaisE) {
    const animal = animaisE.find(animal =>
        animal.getEspecie() === animalParan);

    if (animal === undefined) { throw { erro: "Animal inválido" } }

    return animal;
}

function encontraRecintoPorDieta(animal, recintos) {
    // console.log(leao);
    if (animal.getDieta() === "CARNIVORO") {
        const recintosPossiveisCar = recintos.filter(animalR =>
            animalR.getAnimaisPresentes()[0] === animal.getEspecie() ||
            animalR.getAnimaisPresentes().length == 0);
        return recintosPossiveisCar
    }
    const recintosPossiveisHebiveros = recintos.slice();
    return recintosPossiveisHeb;
}
// function encontraRecintoPorEspacoDisposnivel(recintosPossiveis, animal, quantidade) {

// }
export { RecintosZoo as RecintosZoo };






/*
Quando você usa expect(resultado.erro).toBe("Animal inválido");
em um teste com Jest, você está verificando se a propriedade erro
do objeto resultado é igual a "Animal inválido". Isso significa que você
espera que o código retorne um objeto com essa estrutura, e não que lance uma exceção.
*/