// RecintoBusiness.js
class RecintoBusiness {
    buscandoAnimalPorEspecie(animalParan, animaisBD) {
        const animal = animaisBD.find(animal =>
            animal.getEspecie() === animalParan);

        if (animal === undefined) { throw { erro: "Animal inválido" } }

        return animal;
    }

    encontraRecintoPorDieta(animal, recintos) {
        if (animal.getDieta() === "CARNIVORO") {
            const recintosPossiveisCar = recintos.filter(r => {
                return r
                    .getAnimaisPresentes().length == 0 ?
                    true : r.getAnimaisPresentes()[0].getEspecie() == animal.getEspecie();
            });
            return recintosPossiveisCar;
        }
        const recintosPossiveisHeb = recintos.filter(r => r.getEspacosOcupados() == 0 ? true : r.getAnimaisPresentes()[0].getDieta() == animal.getDieta());
        return recintosPossiveisHeb;
    }

    encontraRecintoParaHipotamo(recintosPossiveis) {
        const recintosPossiveisHipotamo = recintosPossiveis.filter(r =>
            (
                (r.getBiomas()[0] === "savana" || r.getBiomas()[0] === "rio")
                && r.getEspacosOcupados() == 0
            ) || (r.getBiomas()[0] === "savana" && r.getBiomas()[1] === "rio")
        );

        return recintosPossiveisHipotamo;
    }

    encontraRecintoParaMacaco(recintosPossiveis, quantidade) {
        const recintosPossiveisMacaco = recintosPossiveis.filter(r => {
            if (r.getBiomas()[0] === "savana" || r.getBiomas()[1] === "floresta" || r.getBiomas()[0] === "floresta") {
                if ((quantidade > 1 && r.getEspacosOcupados() == 0)) { return true; }
                if (r.getEspacosOcupados() > 0) {
                    if (r.getAnimaisPresentes()[0].getEspecie() !== "HIPOPOTAMO") return true;
                }
                if (r.getBiomas()[0] === "savana" && r.getBiomas()[1] === "rio" && r.getEspacosOcupados() > 0) return true;
            }
        });
        return recintosPossiveisMacaco;
    }

    encontraRecintoPorBioma(animal, recintosPossiveis) {
        if (animal.getEspecie() === "MACACO" || animal.getEspecie() === "HIPOPOTAMO") {
            return recintosPossiveis;
        }
        const recintosPorBioma = recintosPossiveis.filter(r => animal.getBiomas()[0] === r.getBiomas()[0]
            || animal.getBiomas()[1] === r.getBiomas()[0]);
        return recintosPorBioma;
    }

    encontraRecintoPorEspacoDisposnivel(recintosPossiveis, animalObj, quantidade) {
        const recintosPossiveisTamanho = [];
        for (const r of recintosPossiveis) {
            let tamanhoRecinto = r.getTamanho();
            let espacosOcupados = r.getEspacosOcupados();
            let tamanhoOcupadoAnimal = animalObj.getTamanhoOcupado();
            if (r.getAnimaisPresentes().length > 0 && animalObj.getEspecie() !== r.getAnimaisPresentes()[0].getEspecie()) espacosOcupados = espacosOcupados + 1;
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

    formataORetorno(recintosPossiveis) {
        let arrayResposta = [];
        for (const r of recintosPossiveis) {
            let espacosLivres = r.getTamanho() - r.getEspacosOcupados();
            let recinto = `Recinto ${r.getNumero()} (espaço livre: ${espacosLivres} total: ${r.getTamanho()})`;
            arrayResposta.push(recinto);
        }
        return { recintosViaveis: arrayResposta };
    }
}

export default RecintoBusiness;
