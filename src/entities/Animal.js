class Animal {
    #especie;
    #tamanhoOcupado;
    #biomas = [];
    #dieta;

    constructor(especie, tamanhoOcupado, biomas = [], dieta) {
        this.#especie = especie;
        this.#tamanhoOcupado = tamanhoOcupado;
        this.#biomas = biomas;
        this.#dieta = dieta;
    }

    // getters
    getEspecie() {
        return this.#especie;
    }

    getTamanhoOcupado() {
        return this.#tamanhoOcupado;
    }

    getBiomas() {
        return this.#biomas;
    }
    getDieta() {
        return this.#dieta;
    }

}

export default Animal;