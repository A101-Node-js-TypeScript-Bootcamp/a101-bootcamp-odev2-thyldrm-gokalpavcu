const {list,listSingle} = require("../services/Categories")
const httpStatus = require("http-status")

const listCategories = (req, res) => {
    list().then((response)=>{
        res.status(httpStatus.OK).send(response.data)
    }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}

const listCategory = (req, res) => {
    if(!req?.params?.id) return res.status(httpStatus.BAD_REQUEST).send({error:"ID bilgisi eksik.."})
    
    listSingle(req.params.id).then((response)=>{
        res.status(httpStatus.OK).send(response.data)
    }).catch((err)=>{
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}

module.exports = {listCategories,listCategory}