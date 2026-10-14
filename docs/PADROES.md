# Documentação Arquitetural: Padrões Criacionais

Este documento detalha as decisões arquiteturais tomadas durante o desenvolvimento do Sistema de Venda de Ingressos para Eventos, justificando a aplicação dos cinco padrões criacionais exigidos no projeto.

---

## 1. Singleton
- **Qual padrão foi utilizado:** Singleton
- **Onde está localizado:** `src/GerenciadorVendas.ts` (Classe `GerenciadorVendas`)
- **Qual problema resolve:** A falta de centralização no controle de estado global. Em um sistema de vendas, instanciar múltiplos gerenciadores de transação acidentalmente causaria inconsistência nos logs de faturamento, onde ingressos poderiam ser registrados em instâncias diferentes, perdendo o rastreio do total vendido.
- **Por que faz sentido neste contexto:** O Singleton bloqueia a construção direta via construtor privado e fornece um método de acesso estático (`obterInstancia()`). Isso garante matematicamente que todo o ciclo de vida da aplicação aponte para o exato mesmo gerenciador de estado, mantendo o balanço de caixa e os logs perfeitamente unificados.

## 2. Factory Method
- **Qual padrão foi utilizado:** Factory Method
- **Onde está localizado:** `src/FabricaIngressos.ts` (Classes `CriadorIngresso`, `CriadorIngressoVIP` e `CriadorIngressoPadrao`)
- **Qual problema resolve:** O alto acoplamento do código cliente às classes concretas e a poluição visual com estruturas condicionais (`if/else` ou `switch`) na hora de determinar qual tipo de ingresso gerar baseado nas regras de negócio (Pista ou VIP).
- **Por que faz sentido neste contexto:** Ao delegar a lógica de instanciação para subclasses especializadas, o padrão nos permite aderir ao Princípio Aberto/Fechado (Open/Closed Principle do SOLID). Se futuramente o sistema precisar suportar um novo tipo de ingresso (ex: "Camarote"), basta criar um novo `CriadorIngressoCamarote` sem tocar na lógica já existente.

## 3. Builder
- **Qual padrão foi utilizado:** Builder
- **Onde está localizado:** `src/ConstrutorEvento.ts` (Classes `Evento` e `ConstrutorEvento`)
- **Qual problema resolve:** O anti-pattern conhecido como "Construtor Telescópico" (Telescoping Constructor). Um evento real possui múltiplos atributos (nome, local, data, atração principal, open bar, limite de lotação, etc.), sendo muitos deles opcionais. Passar tudo isso em uma única chamada de construtor torna o código ilegível e propenso a erros de ordem de parâmetros.
- **Por que faz sentido neste contexto:** O Builder extrai a lógica de montagem para uma classe separada, oferecendo uma interface fluente (Method Chaining). Isso permite construir eventos passo a passo de forma extremamente clara no código cliente, tornando opcional a chamada de determinados métodos, como o `definirOpenBar()`.

## 4. Abstract Factory
- **Qual padrão foi utilizado:** Abstract Factory
- **Onde está localizado:** `src/FabricaKitEvento.ts` (Interface `FabricaKitEvento` e suas implementações)
- **Qual problema resolve:** A necessidade de garantir a integridade e compatibilidade na criação de famílias de produtos (neste caso, os Kits de Entrada). Era necessário impedir que um erro lógico misturasse um brinde de teatro com um sistema de catraca de festival de música.
- **Por que faz sentido neste contexto:** A Abstract Factory atua como um "contrato de compatibilidade". A implementação `FabricaFestivalMusica` tem a garantia estrutural de sempre gerar uma *Pulseira RFID* atrelada a um *Copo do Festival*. Já a `FabricaTeatro` gerará o *Ingresso Impresso* atrelado ao *Livreto*, eliminando qualquer chance de incompatibilidade de domínio na hora de entregar o kit ao usuário.

## 5. Prototype
- **Qual padrão foi utilizado:** Prototype
- **Onde está localizado:** `src/FabricaIngressos.ts` (Interface `Prototipo` e Classe `IngressoBase`)
- **Qual problema resolve:** O custo computacional e a redundância ao criar múltiplos objetos quase idênticos do zero. No domínio de ingressos, a "compra em lote" (ex: um grupo de 5 amigos indo na mesma pista do mesmo evento) faria o sistema passar pelo construtor complexo 5 vezes com os mesmos dados bases.
- **Por que faz sentido neste contexto:** O Prototype soluciona isso clonando um objeto base (o "protótipo"). O sistema processa o evento, setor e valor uma única vez na criação do primeiro ingresso. Para os demais amigos, chamamos o método `.clonar()`, o que duplica o objeto em memória de forma muito mais performática, restando apenas atualizar o nome do `titular` de cada ingresso.