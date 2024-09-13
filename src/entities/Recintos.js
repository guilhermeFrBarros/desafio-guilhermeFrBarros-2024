
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
        this.#animaisPresentes = animaisPresentes;
        this.#espacosOcupados = espacosOcupados;
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

    setEspacosOcupados(espacos) {
        if (typeof espacos === 'number') {
            this.#espacosOcupados = espacos;
        } else {
            throw new Error('O valor deve ser um número');
        }
    }
}

export default Recinto;
