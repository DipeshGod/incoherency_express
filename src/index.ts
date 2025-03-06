import express from "express";
import { alertRulesRouter } from "./routes/alertRules/route";

const app = express();
const PORT = process.env.PORT || 3000;

// Route handler

app.use("/AlertRules", alertRulesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
