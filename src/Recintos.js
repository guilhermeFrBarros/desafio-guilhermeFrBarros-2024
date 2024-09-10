
class Recinto {
    #numero;
    #tamanho;
    #biomas;
    #espacos;
    #animaisPresentes;

    constructor(numero, tamanho, biomas = [],
        animaisPresentes = [], espacos = []) {
        this.#numero = numero;
        this.#tamanho = tamanho;
        this.#biomas = biomas;
        this.#espacos = espacos;
        this.#animaisPresentes = animaisPresentes;
    }

    get numero() {
        return this.#numero;
    }

    get tamanho() {
        return this.#tamanho;
    }

    get biomas() {
        return this.#biomas;
    }

    adicionarBioma(bioma) {
        this.#biomas.push(bioma);
    }
}

export default Recinto;
