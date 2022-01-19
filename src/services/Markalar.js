const axios = require("axios")

const list = async (name) => {
    const response = await axios.get(`https://api.trendyol.com/sapigw/brands/by-name?name=${name}`)
    return response
}

module.exports={list}