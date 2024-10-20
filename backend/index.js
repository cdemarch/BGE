require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const userRoutes = require("./routes/user")

const app = express()
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// connect to database
mongoose.connect(process.env.MONGO_URI)
  // listen for requests
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("Mongo connection error:", err));


// ROUTES
app.use('/api/user', userRoutes)