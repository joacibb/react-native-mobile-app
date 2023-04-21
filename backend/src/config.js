import { config as dotenv} from "dotenv";
dotenv();

export const config = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "12345678",
    database: process.env.DB_DATABASE || "test"
}