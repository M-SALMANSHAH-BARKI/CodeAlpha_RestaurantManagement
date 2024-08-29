
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});

