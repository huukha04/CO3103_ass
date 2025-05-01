import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./src/config/db.js";
import config from "./src/config/dotenv.js";
import routes from "./src/routes/index.js";

// Khởi tạo __dirname cho ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173", 
        credentials: true,
    })
);


app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", routes);

app.listen(config.PORT, () =>
    console.log(`Server running on port http://localhost:${config.PORT}`)
);
