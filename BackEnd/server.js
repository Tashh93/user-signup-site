import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('<h1>Hello Tashhhhhh!</h1><p>Welcome to the server!</p>');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


