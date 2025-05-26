// import { configDotenv } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routers/Productrouters.js'
import router from './routers/Productrouters.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
console.log("hello")

app.use('/products', productRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/productsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch((err) => console.error(err));
