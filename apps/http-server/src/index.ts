import {client} from "@repo/db/config"
import express from "express";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  client.user.findMany()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
})

app.post("/user", (req, res) => {
  const { username, password, email } = req.body;
  
  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return
  }

  client.user.create({
    data: {
      username,
      password,
      email
    }
  })
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
})

app.listen(8080, () => {
  console.log("App is live on port 8080");
});