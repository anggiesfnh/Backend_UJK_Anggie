const validationBodySiswa = (req, res, next) => {
    const { nama, alamat, tanggal_lahir, jurusan } = req.body;
    if (!nama || !alamat || !tanggal_lahir || !jurusan) {
        return res.status(400).json({ 
            message: "nama, alamat, tanggal_lahir and jurusan is required" 
        });
    }

    next();
};

module.exports = {
    validationBodySiswa
};
