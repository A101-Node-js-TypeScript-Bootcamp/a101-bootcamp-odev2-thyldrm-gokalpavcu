const {list} = require("../services/Markalar")
const httpStatus = require("http-status")

const listMarka = (req, res) => {
    if(!req?.params?.markaName) return res.status(httpStatus.BAD_REQUEST).send({error:"Marka bilgisi eksik.."})
    
    list(req.params.markaName).then((response)=>{
        res.status(httpStatus.OK).send(response.data)
    }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}

module.exports = {listMarka}