const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Darshan:manojkm@cluster0.byagdbp.mongodb.net/?retryWrites=true&w=majority",{
// useNewUr1Parser:true,
useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongoDB")
})
mongoose.connection.on('error',(err)=>{
    console.log(err)
})

