import express from "express";
import cors from "cors";

import connectDB from "./src/config/db.js";
import config from "./src/config/dotenv.js"; // const config
import routes from "./src/routes/index.js";

connectDB();

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000", 
        credentials: true,
    })
);


app.use("/api", routes);

app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));
  