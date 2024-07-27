import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import cors from 'cors'
import router from './routes/routes.js';


import db from './models/index.js';


const app = express();
const PORT = process.env.PORT || 8080
const FRONTEND_URL = process.env.FRONTEND_URL


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    
}))

db.sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });


    db.sequelize.sync()
    .then(() => {
      console.log('Database & tables created!');
    });
  

app.use('/api',router);
app.listen(PORT, () => {
    console.log(`Server Started at http://localhost:${PORT}`)
})