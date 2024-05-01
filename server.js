const express = require('express');

require('./config/db.js')
const config = require('./config/config.js');

const cors = require('cors');
const userRoute = require("./routes/userRoute.js");



const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(userRoute)



app.get("/",(req, res)=>{
    res.status(200).json({message : "Server is runing"})
})
app.use((req, res, next)=>{
    res.status(404).json({message : "This url is not found"})
})
app.use((err, req, res, next)=>{
    res.status(500).json({message : "Server something broke"})
})



const PORT = config.app.port;

app.listen(PORT, ()=>{
    console.log(`Server is runing successfully at http://localhost:${PORT}`);
})