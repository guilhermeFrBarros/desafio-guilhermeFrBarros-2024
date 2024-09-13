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
            let recintosPossiveis = encontraRecintoPorDieta(animalObjeto, recintos);
            //Regras unicas de Hipopotamo e macaco
            if ("HIPOPOTAMO" === animalObjeto.getEspecie()) recintosPossiveis = encontraRecintoParaHipotamo(recintosPossiveis);
            if ("MACACO" === animalObjeto.getEspecie()) { recintosPossiveis = encontraRecintoParaMacaco(recintosPossiveis, quantidade); }

            recintosPossiveis = encontraRecintoPorBioma(animalObjeto, recintosPossiveis);
            recintosPossiveis = encontraRecintoPorEspacoDisposnivel(recintosPossiveis, animalObjeto, quantidade)
            // return formataORetorno()
        } catch (e) {
            console.log(e);
            return e;
        }

    }

}

function buscandoAnimalPorEspecie(animalParan, animaisBD) {
    const animal = animaisBD.find(animal =>
        animal.getEspecie() === animalParan);

    if (animal === undefined) { throw { erro: "Animal inválido" } }

    return animal;
}

function encontraRecintoPorDieta(animal, recintos) {
    if (animal.getDieta() === "CARNIVORO") {
        const recintosPossiveisCar = recintos.filter(r => {
            return r
                .getAnimaisPresentes().length == 0 ?
                true : r.getAnimaisPresentes()[0].getEspecie() == animal.getEspecie();
        });
        return recintosPossiveisCar
    }
    const recintosPossiveisHeb = recintos.filter(r => r.getEspacosOcupados() == 0 ? true : r.getAnimaisPresentes()[0].getDieta() == animal.getDieta());
    return recintosPossiveisHeb;
}

function encontraRecintoParaHipotamo(recintosPossiveis) {
    const recintosPossiveisHipotamo = recintosPossiveis.filter(r =>
        (
            (r.getBiomas()[0] === "savana" || r.getBiomas()[0] === "rio")
            && r.getEspacosOcupados() == 0
        ) || (r.getBiomas()[0] === "savana" && r.getBiomas()[1] === "rio")
    );

    return recintosPossiveisHipotamo;
}

function encontraRecintoParaMacaco(recintosPossiveis, quantidade) {
    const recintosPossiveisMacaco = recintosPossiveis.filter(r => {
        if (r.getBiomas()[0] === "savana" || r.getBiomas()[1] === "floresta" || r.getBiomas()[0] === "floresta") {
            // console.log("dentro: " + r.getNumero()) // ---------------------------------------
            if ((quantidade > 1 && r.getEspacosOcupados() == 0)) { return true; }
            if (r.getEspacosOcupados() > 0) {
                if (r.getAnimaisPresentes()[0].getEspecie() !== "HIPOPOTAMO") return true;
            }
            if (r.getBiomas()[0] === "savana" && r.getBiomas()[1] === "rio" && r.getEspacosOcupados() > 0) return true;

        }
    })
    return recintosPossiveisMacaco;
}
function encontraRecintoPorBioma(animal, recintosPossiveis) {
    if (animal.getEspecie() === "MACACO" || animal.getEspecie() === "HIPOPOTAMO") {
        return recintosPossiveis;
    }
    const recintosPorBioma = recintosPossiveis.filter(r => animal.getBiomas()[0] === r.getBiomas()[0]
        || animal.getBiomas()[1] === r.getBiomas()[0])
    return recintosPorBioma;
}
function encontraRecintoPorEspacoDisposnivel(recintosPossiveis, animalObj, quantidade) {
    const recintosPossiveisTamanho = [];
    for (const r of recintosPossiveis) {
        let tamanhoRecinto = r.getTamanho();
        let espacosOcupados = r.getEspacosOcupados();
        let tamanhoOcupadoAnimal = animalObj.getTamanhoOcupado();
        if (r.getAnimaisPresentes().length > 1) espacosOcupados = espacosOcupados + 1;
        if (tamanhoRecinto >= (espacosOcupados + (tamanhoOcupadoAnimal * quantidade))) {
            r.setEspacosOcupados(espacosOcupados + (tamanhoOcupadoAnimal * quantidade));
            for (let i = 0; i < quantidade; i++) {
                r.getAnimaisPresentes().push(animalObj);
            }
            recintosPossiveisTamanho.push(r);
        }
    }
    return (recintosPossiveisTamanho.length > 0)
        ? recintosPossiveisTamanho : (() => { throw { erro: "Não há recinto viável" }; })();

}

export { RecintosZoo as RecintosZoo };






/*
Quando você usa expect(resultado.erro).toBe("Animal inválido");
em um teste com Jest, você está verificando se a propriedade erro
do objeto resultado é igual a "Animal inválido". Isso significa que você
espera que o código retorne um objeto com essa estrutura, e não que lance uma exceção.
*/