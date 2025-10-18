const express = require('express')
const router = express.Router()

router.use(express.json())

const books = [
    {"book":"Twilight"},
    {"book":"Lord of the Rings"},
    {"book":"Harry Potter"},
]

let booknew = books.map(book=>`<p>${book.book}</p>`).join('')


router.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.send(`<h1> Here is the list of all books. </h1>${booknew}`)
})

router.post('/',(req,res)=>{
    const newbook = req.body
    books.push(newbook)
    booknew = books.map(book=>`<p>${book.book}</p>`).join('')
    res.json('Book has been added.')
    
})

module.exports = router;