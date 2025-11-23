// import class prisma client
const {PrismaClient} = require("@prisma/client");

// inisialisasi instance prisma yang terhubung ke database sesuai database URL
const prisma = new PrismaClient();

// agar data di file ini bisa dipakai di file lain
module.exports = prisma;