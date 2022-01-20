const express = require("express");
const app = express();
const {markalarRoute,categoriesRoute,userRoute} = require("./routes")
const config = require("./config")

config();

app.use(express.json())

app.use("/user",userRoute)
app.use("/markalar", markalarRoute)
app.use("/categories", categoriesRoute)

app.listen(process.env.APP_PORT,()=>{
    console.log(`Sunucu ${process.env.APP_PORT} portunda başlatıldı.`)
})