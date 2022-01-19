const express = require("express");
const app = express();
const {markalarRoute,categoriesRoute,userRoute} = require("./routes")

app.use(express.json())

app.use("/user",userRoute)
app.use("/markalar", markalarRoute)
app.use("/categories", categoriesRoute)


const port=8080;
app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı.`)
})