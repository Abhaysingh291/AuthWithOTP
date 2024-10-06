import express, { Request, Response, NextFunction } from 'express';
import authRoutes from './routes/authRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', authRoutes);

// 404 Error Handler if Routes is not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
// It works when error occurs in the Express.js application (Middleware errors,Route handler errors)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
