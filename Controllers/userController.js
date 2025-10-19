const getAllUsers = (req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end('Fetching all users')
}

const addUser = (req,res)=>{
    res.send('Adding a new user')
}

const getUserById = (req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end('Fetching user with id: '+req.params.id)
}

module.exports = {
    getAllUsers,
    addUser,
    getUserById
}