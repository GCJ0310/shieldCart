const mongoose = require("mongoose")

const express = require("express")
const usermodel = require("./models")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
mongoose
  .connect("mongodb://localhost:27017/shieldCartapp")
  .then(() => {
    console.log("mongodb connected")
  })
  .catch(() => {
    console.log("failed")
  })

app.post("/Register", (req, res) => {
  usermodel
    .create(req.body)
    .then((Cartusers) => res.json(Cartusers))
    .catch((e) => {
      res.json(e)
    })
})

app.post("/Login", async (req, res) => {
  const { email, password } = req.body
     usermodel.findOne({ email: email }).then((Cartusers) => {
    if (Cartusers) {
      if (Cartusers.password === password) {
        res.json({
        message: "success",
        user: {
          id: Cartusers._id,
          username: Cartusers.username,
          email: Cartusers.email,
          allergies:Cartusers.allergies
        },
      })
        
      } else {
        res.json("wrong password ")
      }
    } else {
      res.json("no record exist")
    }
  })
})
app.listen(5000, () => {
  console.log("port connected")
})
