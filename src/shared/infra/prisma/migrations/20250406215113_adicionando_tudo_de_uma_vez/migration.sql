/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "Cliente" (
    "idCliente" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "numCartao" TEXT NOT NULL,
    "validadeCartao" TEXT NOT NULL,
    "nomeCartao" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("idCliente")
);

-- CreateTable
CREATE TABLE "Entregador" (
    "idEntregador" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "avaliacao" DOUBLE PRECISION NOT NULL DEFAULT 5,
    "meioDeTransporte" TEXT NOT NULL,

    CONSTRAINT "Entregador_pkey" PRIMARY KEY ("idEntregador")
);

-- CreateTable
CREATE TABLE "Enderecos" (
    "idEnderecos" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "nomeCartao" TEXT NOT NULL,
    "clienteId" TEXT,

    CONSTRAINT "Enderecos_pkey" PRIMARY KEY ("idEnderecos")
);

-- CreateTable
CREATE TABLE "Estabelecimento" (
    "idEstabelecimento" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "enderecoId" TEXT NOT NULL,

    CONSTRAINT "Estabelecimento_pkey" PRIMARY KEY ("idEstabelecimento")
);

-- CreateTable
CREATE TABLE "Item" (
    "idItem" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "disponivel" BOOLEAN NOT NULL DEFAULT false,
    "pedidoId" TEXT NOT NULL,
    "estabelecimentoId" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("idItem")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "idPedido" TEXT NOT NULL,
    "avaliacao" DOUBLE PRECISION NOT NULL,
    "dataDeCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "formaDePagamento" TEXT NOT NULL,
    "dataDeEntrega" TIMESTAMP(3) NOT NULL,
    "clienteId" TEXT NOT NULL,
    "entregadorId" TEXT NOT NULL,
    "estabelecimentoId" TEXT NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("idPedido")
);

-- CreateIndex
CREATE UNIQUE INDEX "Estabelecimento_enderecoId_key" ON "Estabelecimento"("enderecoId");

-- AddForeignKey
ALTER TABLE "Enderecos" ADD CONSTRAINT "Enderecos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("idCliente") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estabelecimento" ADD CONSTRAINT "Estabelecimento_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Enderecos"("idEnderecos") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_estabelecimentoId_fkey" FOREIGN KEY ("estabelecimentoId") REFERENCES "Estabelecimento"("idEstabelecimento") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("idPedido") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("idCliente") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_entregadorId_fkey" FOREIGN KEY ("entregadorId") REFERENCES "Entregador"("idEntregador") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_estabelecimentoId_fkey" FOREIGN KEY ("estabelecimentoId") REFERENCES "Estabelecimento"("idEstabelecimento") ON DELETE CASCADE ON UPDATE CASCADE;
