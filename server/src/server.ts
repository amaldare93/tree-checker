import express from "express";
import cors from "cors";

import treeRoutes from "./routes/trees";

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/trees", treeRoutes);

app.listen(8080, () => {
  console.log("Server has started on port 8080");
});
