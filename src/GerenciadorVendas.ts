export class GerenciadorVendas {
    private static instancia: GerenciadorVendas;
    private logVendas: string[] = [];

    private constructor() {}

    public static obterInstancia(): GerenciadorVendas {
        if (!GerenciadorVendas.instancia) {
            GerenciadorVendas.instancia = new GerenciadorVendas();
        }
        return GerenciadorVendas.instancia;
    }

    public registrarVenda(infoIngresso: string): void {
        this.logVendas.push(infoIngresso);
        console.log(`[Venda Registrada] ${infoIngresso}`);
    }
    
    public exibirTotalVendas(): void {
        console.log(`Total de ingressos vendidos: ${this.logVendas.length}`);
    }
}