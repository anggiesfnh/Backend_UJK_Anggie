/*
  Warnings:

  - You are about to alter the column `tanggal_lahir` on the `siswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `siswa` MODIFY `tanggal_lahir` DATETIME(3) NOT NULL;
