if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
const userRoute = require("./Routes/userRoute")
const chatRoute = require("./Routes/chatRoute")
const app = express()

const port = process.env.PORT || 9090;
const uri = process.env.ATLAS_URI;

//db
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('mongoDB connected!')
}).catch((error) => {
  console.error(error.message);
})

app.use(express.json())
app.use(cors())
app.use("/api/users", userRoute);
app.use("/api/chat", chatRoute);


app.listen(port, (req, res) => {
    console.log(`server is running on: ${port}`);
})

//paths
app.get('/', (req, res) => {
  res.send(":|")
})