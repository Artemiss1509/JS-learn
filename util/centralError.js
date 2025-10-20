const postError = (res,data,status)=>{
    return res.status(status).json({
        "Error":data,
        "Sucess":false
    })
}

module.exports = postError;