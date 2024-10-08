import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import participantRoutes from './routes/participantRoutes.js';
import authRoutes from './routes/authRoutes.js';  
import notFound from './middleware/notFound.js'
import errorHandler from './middleware/errorHandler.js';
import logger from './middleware/logger.js';
import connectDB from './config/db.js';  

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8081;

// Log every request info
app.use(logger);
// Enables cross-origin resource sharing
app.use(cors());
// Parse JSON request body
app.use(express.json());
// Connect the MongoDB
if (process.env.NODE_ENV !== 'test') {
  connectDB(); // Only connect to DB if not in test environment
}
// API router
app.use('/api/participants', participantRoutes);
app.use('/api/auth', authRoutes); 
// If no matching route is found, use the notFound middleware
app.use(notFound);
// If a matching route is found and an error is thrown, it is handled by errorHandler
app.use(errorHandler);
// Start the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;