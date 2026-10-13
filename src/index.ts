import { GerenciadorVendas } from './GerenciadorVendas';
import { CriadorIngressoVIP, CriadorIngressoPadrao } from './FabricaIngressos';
import { ConstrutorEvento } from './ConstrutorEvento';
import { FabricaFestivalMusica } from './FabricaKitEvento';

console.log("--- INICIANDO SISTEMA DE INGRESSOS ---");

const gerenciador = GerenciadorVendas.obterInstancia();

const megaShow = new ConstrutorEvento()
    .definirNome("Festival de Tecnologia e Música")
    .definirData("2026-12-10")
    .definirLocal("Arena Principal")
    .definirOpenBar(true)
    .construir();

megaShow.exibirDetalhes();

const fabricaVip = new CriadorIngressoVIP(megaShow.nome);
const meuIngressoVIP = fabricaVip.criarIngresso();
meuIngressoVIP.titular = "João Silva";
gerenciador.registrarVenda(`Ingresso emitido para ${meuIngressoVIP.titular}: ${meuIngressoVIP.nomeEvento} (R$${meuIngressoVIP.preco})`);

const fabricaPadrao = new CriadorIngressoPadrao(megaShow.nome);
const ingressoModelo = fabricaPadrao.criarIngresso(); 

const ingressoAmigo1 = ingressoModelo.clonar();
ingressoAmigo1.titular = "Carlos Souza";
gerenciador.registrarVenda(`Ingresso emitido para ${ingressoAmigo1.titular}: ${ingressoAmigo1.nomeEvento} (R$${ingressoAmigo1.preco})`);

const ingressoAmigo2 = ingressoModelo.clonar();
ingressoAmigo2.titular = "Ana Clara";
gerenciador.registrarVenda(`Ingresso emitido para ${ingressoAmigo2.titular}: ${ingressoAmigo2.nomeEvento} (R$${ingressoAmigo2.preco})`);

const kitFestival = new FabricaFestivalMusica();
console.log(`\nKit entregue na entrada para VIPs: [${kitFestival.criarItemPrincipal()}] e [${kitFestival.criarBrinde()}]`);

gerenciador.exibirTotalVendas();