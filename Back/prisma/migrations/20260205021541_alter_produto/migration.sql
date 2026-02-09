/*
  Warnings:

  - You are about to drop the `cliente` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `produto` ADD COLUMN `categoria` VARCHAR(191) NULL,
    ADD COLUMN `estado` ENUM('DISPONIVEL', 'NAO_DISPONIVEL') NOT NULL DEFAULT 'DISPONIVEL',
    ADD COLUMN `preco` DOUBLE NOT NULL DEFAULT 200.0,
    ADD COLUMN `stock` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `cliente`;
