/*
  Warnings:

  - You are about to drop the column `totalBruto` on the `venda` table. All the data in the column will be lost.
  - You are about to drop the column `totalLiquido` on the `venda` table. All the data in the column will be lost.
  - You are about to drop the column `valorEntregue` on the `venda` table. All the data in the column will be lost.
  - You are about to drop the column `valorVendido` on the `venda` table. All the data in the column will be lost.
  - Added the required column `codigo` to the `ItemVenda` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `ItemVenda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `itemvenda` ADD COLUMN `codigo` VARCHAR(191) NOT NULL,
    ADD COLUMN `descricao` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `venda` DROP COLUMN `totalBruto`,
    DROP COLUMN `totalLiquido`,
    DROP COLUMN `valorEntregue`,
    DROP COLUMN `valorVendido`,
    ADD COLUMN `total` DOUBLE NOT NULL DEFAULT 0.00,
    ADD COLUMN `totalFinal` DOUBLE NOT NULL DEFAULT 0.00,
    ADD COLUMN `valorPago` DOUBLE NOT NULL DEFAULT 0.00;
