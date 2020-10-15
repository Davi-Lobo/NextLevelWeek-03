import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
    
    return res.json({ message: "Hello World!" });
});

app.listen(3333);