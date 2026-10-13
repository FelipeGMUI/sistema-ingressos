export interface Prototipo {
    clonar():this;
}

export class IngressoBase implements Prototipo {
    constructor(
        public nomeEvento: string, 
        public preco: number, 
        public titular?: string
    ) {}

    clonar(): this {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

export abstract class CriadorIngresso {
    public abstract criarIngresso(): IngressoBase;
}

export class CriadorIngressoVIP extends CriadorIngresso {
    constructor(private nomeEvento: string) { super(); }
    
    public criarIngresso(): IngressoBase {
        return new IngressoBase(`${this.nomeEvento} - Área VIP`, 300);
    }
}

export class CriadorIngressoPadrao extends CriadorIngresso {
    constructor(private nomeEvento: string) { super(); }
    
    public criarIngresso(): IngressoBase {
        return new IngressoBase(`${this.nomeEvento} - Pista Comum`, 100);
    }
}