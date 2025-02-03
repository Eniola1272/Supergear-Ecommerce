import express from 'express'
const app = express()
import "dotenv/config";
import cors from 'cors';
import { fileURLPath } from 'url';


const port = process.env.PORT || 8000;
app.use(cors);
app.use(express.json())

const __filename = fileURLPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})