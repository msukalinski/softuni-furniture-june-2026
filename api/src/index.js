import express, { json } from 'express';
import cors from 'cors';

import routes from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use(routes)

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})