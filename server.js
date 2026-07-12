import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
});
import app from './src/app.js';
import connectDB from './src/config/db.js';

const PORT = process.env.PORT || 5000

connectDB()
.then(() => {console.log("MongDB connected")})
.catch((err) => {console.log(err)})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

