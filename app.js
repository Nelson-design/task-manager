const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { createTasks, getAllTasks, deleteTasks, getTasks, updateTasks } = require('./controllers/tasks.controller');
const tasks = require('./controllers/routes/tasks');
var cors = require('cors');
const port = process.env.PORT;
const { AppStarter } = require("./utils");



app.use(express.json());
app.use(express.urlencoded({
    extended: true,
})
);
app.use(express.static("./public"));

app.use(cors());

console.log('Task Manager App');

app.get("/api/v1/tasks", getAllTasks);

app.get("/api/v1/tasks/:id", getTasks);

app.post("/api/v1/tasks", createTasks);

app.patch("/api/v1/tasks/:id", updateTasks);

app.delete("/api/v1/tasks/:id", deleteTasks);

app.all("*", (req, res) => {
    return res.status(404).json({ message: "Route does not exist" })
});



app.listen(port, AppStarter(port));