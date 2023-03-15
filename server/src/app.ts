import express from "express";
import userRoute from "./routes/user";
import recipeRoute from "./routes/recipe";
import authRoute from "./routes/auth";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/recipe", recipeRoute);
app.use("/auth", authRoute);

app.listen(8000);
