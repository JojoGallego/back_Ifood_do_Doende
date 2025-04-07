/*
  Warnings:

  - The primary key for the `Cliente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idCliente` column on the `Cliente` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Enderecos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idEnderecos` column on the `Enderecos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `clienteId` column on the `Enderecos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Entregador` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idEntregador` column on the `Entregador` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Estabelecimento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idEstabelecimento` column on the `Estabelecimento` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idItem` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `pedidoId` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Pedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `idPedido` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `enderecoId` on the `Estabelecimento` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `estabelecimentoId` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `clienteId` on the `Pedido` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `entregadorId` on the `Pedido` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `estabelecimentoId` on the `Pedido` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Enderecos" DROP CONSTRAINT "Enderecos_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Estabelecimento" DROP CONSTRAINT "Estabelecimento_enderecoId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_estabelecimentoId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_entregadorId_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_estabelecimentoId_fkey";

-- AlterTable
ALTER TABLE "Cliente" DROP CONSTRAINT "Cliente_pkey",
DROP COLUMN "idCliente",
ADD COLUMN     "idCliente" SERIAL NOT NULL,
ADD CONSTRAINT "Cliente_pkey" PRIMARY KEY ("idCliente");

-- AlterTable
ALTER TABLE "Enderecos" DROP CONSTRAINT "Enderecos_pkey",
DROP COLUMN "idEnderecos",
ADD COLUMN     "idEnderecos" SERIAL NOT NULL,
DROP COLUMN "clienteId",
ADD COLUMN     "clienteId" INTEGER,
ADD CONSTRAINT "Enderecos_pkey" PRIMARY KEY ("idEnderecos");

-- AlterTable
ALTER TABLE "Entregador" DROP CONSTRAINT "Entregador_pkey",
DROP COLUMN "idEntregador",
ADD COLUMN     "idEntregador" SERIAL NOT NULL,
ADD CONSTRAINT "Entregador_pkey" PRIMARY KEY ("idEntregador");

-- AlterTable
ALTER TABLE "Estabelecimento" DROP CONSTRAINT "Estabelecimento_pkey",
DROP COLUMN "idEstabelecimento",
ADD COLUMN     "idEstabelecimento" SERIAL NOT NULL,
DROP COLUMN "enderecoId",
ADD COLUMN     "enderecoId" INTEGER NOT NULL,
ADD CONSTRAINT "Estabelecimento_pkey" PRIMARY KEY ("idEstabelecimento");

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "idItem",
ADD COLUMN     "idItem" SERIAL NOT NULL,
DROP COLUMN "pedidoId",
ADD COLUMN     "pedidoId" INTEGER,
DROP COLUMN "estabelecimentoId",
ADD COLUMN     "estabelecimentoId" INTEGER NOT NULL,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("idItem");

-- AlterTable
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_pkey",
DROP COLUMN "idPedido",
ADD COLUMN     "idPedido" SERIAL NOT NULL,
DROP COLUMN "clienteId",
ADD COLUMN     "clienteId" INTEGER NOT NULL,
DROP COLUMN "entregadorId",
ADD COLUMN     "entregadorId" INTEGER NOT NULL,
DROP COLUMN "estabelecimentoId",
ADD COLUMN     "estabelecimentoId" INTEGER NOT NULL,
ADD CONSTRAINT "Pedido_pkey" PRIMARY KEY ("idPedido");

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
