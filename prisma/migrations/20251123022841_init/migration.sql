-- CreateTable
CREATE TABLE `Siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_siswa` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATETIME(3) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Siswa_kode_siswa_key`(`kode_siswa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
