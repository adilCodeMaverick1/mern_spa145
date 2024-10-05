const express = require ("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("۔/routes/userRoute.js");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT,()=>{
    console.log(`Server is runnig on http://localhost:${PORT}`);
});

app.use("/api/user".userRoutes);
