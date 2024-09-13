import { recintos, animais } from './BDfake/SimulandoBD.js';
import RecintoBusiness from './business/RecintoBusiness.js';
const recintoBusiness = new RecintoBusiness();

class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        try {
            if (quantidade < 1) { throw { erro: "Quantidade inválida" } }
            const animalObjeto = recintoBusiness.buscandoAnimalPorEspecie(animal, animais);
            let recintosPossiveis = recintoBusiness.encontraRecintoPorDieta(animalObjeto, recintos);
            //Regras unicas de Hipopotamo e macaco
            if ("HIPOPOTAMO" === animalObjeto.getEspecie()) {
                recintosPossiveis = recintoBusiness.encontraRecintoParaHipotamo(recintosPossiveis);
            }
            if ("MACACO" === animalObjeto.getEspecie()) {
                recintosPossiveis = recintoBusiness.encontraRecintoParaMacaco(recintosPossiveis, quantidade);
            }

            recintosPossiveis = recintoBusiness.encontraRecintoPorBioma(animalObjeto, recintosPossiveis);
            recintosPossiveis = recintoBusiness.encontraRecintoPorEspacoDisposnivel(recintosPossiveis, animalObjeto, quantidade);

            return recintoBusiness.formataORetorno(recintosPossiveis);
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

export { RecintosZoo as RecintosZoo };
