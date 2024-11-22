const app = require('./app');

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Welocome to Pharma 2024' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

