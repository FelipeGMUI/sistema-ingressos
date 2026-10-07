export interface FabricaKitEvento {
    criarItemPrincipal(): string;
    criarBrinde(): string;
}

export class FabricaFestivalMusica implements FabricaKitEvento {
    criarItemPrincipal() { return "Pulseira RFID de Acesso"; }
    criarBrinde() { return "Copo Personalizado do Festival"; }
}

export class FabricaTeatro implements FabricaKitEvento {
    criarItemPrincipal() { return "Ingresso Impresso Numerado"; }
    criarBrinde() { return "Livreto da Peça e Elenco"; }
}