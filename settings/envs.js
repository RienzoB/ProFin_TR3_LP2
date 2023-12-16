import { config } from "dotenv";

config();
 
export const env = {
    PORT: process.env.PORT || 4000,
    SECRET_KEY: process.env.SECRET_KEY || "secret",
    MONGODB_URI: process.env.MONGODB_URI,
}; 
