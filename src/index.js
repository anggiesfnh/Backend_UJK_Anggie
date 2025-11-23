const express = require('express');
const cors = require('cors');

const siswaRoutes = require('./routes/siswaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/siswa', siswaRoutes);

// health-check
app.get('/', (req, res) => {
    res.send('API berjalan - gunakan /api/routes');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});