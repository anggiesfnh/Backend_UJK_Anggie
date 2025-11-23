const validationBodySiswa = (req, res) => {
    let { nama, alamat, tanggal_lahir, jurusan } = req.body;

    if ( !nama || !alamat || !tanggal_lahir || !jurusan ) {
        res.status(400).json({message: "nama, alamat, tanggal_lahir and jurusan is required"});
    }
};
module.exports = {
    validationBodySiswa
}