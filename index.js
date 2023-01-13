const express = require('express')
require("./db/employeedb")
const router= require("./routers/empolyee")
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

app.use(router)

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})