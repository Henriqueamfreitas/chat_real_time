import app from "./app";
import { AppDataSource } from "./data-source";
import 'reflect-metadata';

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected");

    const PORT: number = Number(process.env.PORT || 8000);
    app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => console.error('Error connecting to the database:', error));