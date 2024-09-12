
class Recinto {
    #numero;
    #tamanho;
    #biomas;
    #espacosOcupados;
    #animaisPresentes;

    constructor(numero, tamanho, biomas = [],
        animaisPresentes = [], espacosOcupados) {
        this.#numero = numero;
        this.#tamanho = tamanho;
        this.#biomas = biomas;
        this.#espacosOcupados = espacosOcupados;
        this.#animaisPresentes = animaisPresentes;
    }

    getNumero() {
        return this.#numero;
    }

    getTamanho() {
        return this.#tamanho;
    }

    getBiomas() {
        return this.#biomas;
    }
    getAnimaisPresentes() {
        return this.#animaisPresentes;
    }
    getEspacosOcupados() {
        return this.#espacosOcupados;
    }

    adicionarBioma(bioma) {
        this.#biomas.push(bioma);
    }
}

export default Recinto;
