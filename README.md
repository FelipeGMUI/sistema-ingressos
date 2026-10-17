# Sistema de Venda de Ingressos para Eventos 🎟️

Este é um projeto acadêmico desenvolvido em **TypeScript** com o objetivo de demonstrar a aplicação prática e integrada de **Padrões de Projeto Criacionais** (Creational Design Patterns) da Gang of Four (GoF) em um cenário de software real.

O domínio do sistema abrange a criação estruturada de eventos, a emissão de diferentes categorias de ingressos e a distribuição de kits/brindes associados ao tipo do evento.

## 🧩 Padrões de Projeto Aplicados

O sistema implementa de forma integrada os cinco padrões criacionais:

1. **Singleton:** Garante uma instância única do `GerenciadorVendas` para centralizar os logs e manter a consistência do total de ingressos vendidos.
2. **Factory Method:** Delega a criação das categorias de ingressos (VIP e Padrão) para subclasses, evitando o uso excessivo de condicionais.
3. **Builder:** Facilita a construção passo a passo de um `Evento` complexo (com múltiplos atributos como data, local e open bar) utilizando uma interface fluente.
4. **Abstract Factory:** Garante que os itens entregues na porta do evento (Kits) sejam sempre compatíveis com a família do evento (ex: Festival de Música vs. Teatro).
5. **Prototype:** Permite a clonagem rápida de instâncias de ingressos em memória, otimizando o processamento em simulações de "compras em lote".
