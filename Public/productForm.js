const handleFormSubmit = (event)=>{
    event.preventDefault();
    const product = event.target.productName.value;
    console.log(product)
    
    const obj = {
        "productName":product
    }
    axios.post("http://localhost:3000"+"/products",obj).then(res=>console.log(res))
}