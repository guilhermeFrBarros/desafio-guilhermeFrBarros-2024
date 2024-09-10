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
    get especie() {
        return this.#especie;
    }

    get tamanhoOcupado() {
        return this.#tamanhoOcupado;
    }

    get biomas() {
        return this.#biomas;
    }
    get dieta() {
        return this.#dieta;
    }

}

export default Animal;