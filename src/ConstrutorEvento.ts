export class Evento {
    public nome: string = '';
    public data: string = '';
    public local: string = '';
    public possuiOpenBar: boolean = false;

    public exibirDetalhes(): void {
        console.log(`\n=== Detalhes do Evento ===`);
        console.log(`Nome: ${this.nome} | Data: ${this.data}`);
        console.log(`Local: ${this.local} | Open Bar: ${this.possuiOpenBar ? 'Sim' : 'Não'}`);
        console.log(`==========================\n`);
    }
}

export class ConstrutorEvento {
    private evento: Evento;

    constructor() {
        this.evento = new Evento();
    }

    public definirNome(nome: string): this {
        this.evento.nome = nome;
        return this;
    }

    public definirData(data: string): this {
        this.evento.data = data;
        return this;
    }

    public definirLocal(local: string): this {
        this.evento.local = local;
        return this;
    }

    public definirOpenBar(possuiOpenBar: boolean): this {
        this.evento.possuiOpenBar = possuiOpenBar;
        return this;
    }

    public construir(): Evento {
        return this.evento;
    }
}