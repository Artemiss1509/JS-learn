const fs=require('fs')

const requestHandler = (req,res)=>{
    const url = req.url
    const method = req.method

    if(req.url === '/'){
        res.setHeader('Content-Type','text/html')
        fs.readFile('message.txt',(err,data)=>{
                    res.end(
                        `
                        <h1> Hello, ${data.toString()} </h1>
                        <form action="/message" method="POST">
                        <label>Name:</label>
                        <input type="text" name="name">
                        <button type="submit">Submit</button>
                        </form>
                        `
                    )

            })

    }else{ 
        if(req.url === '/message'){
            res.setHeader('Content-Type','text/html');
            const body = []
            req.on('data',(chunk)=>{
                body.push(chunk)
            })
            req.on('end',()=>{
                const parsedBody = Buffer.concat(body).toString()
                const message = parsedBody.split('=')[1]
                fs.writeFile('message.txt',message,(err)=>{
                    res.statusCode = 302
                    res.setHeader('Location','/')
                    return res.end()
                })
            })
        }
}
}

module.exports = requestHandler;
    