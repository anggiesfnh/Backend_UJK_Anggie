const prisma = require('../config/utils');

// READ ALL
const getAllSiswa = async (req, res) => {
    try {
        const siswa = await prisma.siswa.findMany();
        res.json(siswa);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
};

// READ BY ID
const getAllSiswaById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const siswa = await prisma.siswa.findUnique({
            where: {id}
        });

        if (!siswa) return res.status(404).json({message: 'Siswa not found'});
        res.json(siswa);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
};

// CREATE
const createSiswa = async (req, res) => {
    try {
        const { kode_siswa, nama, alamat, tanggal_lahir, jurusan } = req.body;
        const siswa = await prisma.Siswa.create({
            data: { kode_siswa: "TEMP", nama, alamat, tanggal_lahir, jurusan }
        });

        const kode = `S-${String(siswa.id).padStart(3, '0')}`;

        const updateSiswa = await prisma.Siswa.update({
            where: {id: siswa.id},
            data: {kode_siswa: kode}
        });

        return res.status(201).json(updateSiswa);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: error.message });
    }
}

// UPDATE
const updateSiswa = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nama, alamat, tanggal_lahir, jurusan } = req.body;

        const siswa = await prisma.Siswa.update({
            where: { id },
            data: { nama, alamat, tanggal_lahir, jurusan }
        });
        return res.json(siswa);
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            return res.status(404).json({ message: 'Siswa not found' });
        }
        return res.status(400).json({ message: error.message });
    }
}

// DELETE
const deleteSiswa = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.siswa.delete({ where: { id } });
        return res.json({ message: 'Siswa deleted' });
    } catch (error) {
        console.error(error);
        if (error.code === 'P2025') {
            return res.status(404).json({ message: 'Siswa not found' });
        }
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getAllSiswa,
    getAllSiswaById,
    createSiswa,
    updateSiswa,
    deleteSiswa
};