const axios = require("axios")

const list = async () => {
    const response = await axios.get(`https://api.trendyol.com/sapigw/product-categories`)
    return response
}

const listSingle = async (categoryId) => {
    const response = await axios.get(`https://api.trendyol.com/sapigw/product-categories/${categoryId}/attributes`)
    return response
}

module.exports={list,listSingle}