document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    axios.get("https://crudcrud.com/api/5ff2739210624c61b381f3a297ef963d/rohan").then(res=>{for (let i = 0; i < res.data.length; i++){
        display(res.data[i])
    }; 
    const count1 = document.getElementById('rohan_count');
    count1.innerHTML=`Total count: ${res.data.length}`


    }).catch(err=>console.log(err))
    axios.get("https://crudcrud.com/api/5ff2739210624c61b381f3a297ef963d/tyan").then(res=>{for (let i = 0; i < res.data.length; i++){
        display(res.data[i])
    };const count1 = document.getElementById('tyan_count');
    count1.innerHTML=`Total count: ${res.data.length}`}).catch(err=>console.log(err))
    axios.get("https://crudcrud.com/api/5ff2739210624c61b381f3a297ef963d/sara").then(res=>{for (let i = 0; i < res.data.length; i++){
        display(res.data[i])
    };const count1 = document.getElementById('sara_count');
    count1.innerHTML=`Total count: ${res.data.length}`}).catch(err=>console.log(err))
    
    }

function handleFormSubmit(event) {
    event.preventDefault();

    const data = {
        name:event.target.studentName.value,
        vote:event.target.classReps.value,
    }

    if(data.vote === 'rohan'){
        axios.post("https://crudcrud.com/api/5ff2739210624c61b381f3a297ef963d/rohan",data).then(res=>display(res.data)).catch(err=>console.log(err))
    }else if(data.vote==='tyan'){
        axios.post("https://crudcrud.com/api/5ff2739210624c61b381f3a297ef963d/tyan",data).then(res=>display(res.data)).catch(err=>console.log(err))
    }else if(data.vote==='sara'){
        axios.post("https://crudcrud.com/api/5ff2739210624c61b381f3a297ef963d/sara",data).then(res=>display(res.data)).catch(err=>console.log(err))
    }

    

    document.getElementById("studentName").value = "";


    }

function display(data) {
    let ul = document.querySelectorAll('ul')
    if(data.vote==='rohan'){
        ul = document.getElementById('rohan_votes')
        const li = document.createElement('li');
        const delBtn = document.createElement('button');
        li.textContent = "Name: "+data.name;
        delBtn.textContent = 'Delete'
        delBtn.addEventListener('click', () => deleteData(li,data._id,'rohan'));

        li.appendChild(delBtn)

        ul.appendChild(li);
    } else if(data.vote==='tyan'){
        ul = document.getElementById('tyan_votes');
        const li = document.createElement('li');
        const delBtn = document.createElement('button');
        
        li.textContent = "Name: "+data.name;
        delBtn.textContent = 'Delete'
        
        delBtn.addEventListener('click', () => deleteData(li,data._id,'tyan'));
        
        li.appendChild(delBtn)
        

        ul.appendChild(li);
    } else if(data.vote==='sara'){
        ul = document.getElementById('sara_votes');
        const li = document.createElement('li');
        const delBtn = document.createElement('button');
       
        li.textContent = "Name: "+data.name;
        delBtn.textContent = 'Delete'
        
        delBtn.addEventListener('click', () => deleteData(li,data._id,'sara'));
        

        li.appendChild(delBtn)
        

        ul.appendChild(li);
    
    }
    
    }

function deleteData(li, data,name) {
    axios.delete(`https://crudcrud.com/api/5ff2739210624c61b381f3a297ef963d/${name}/${data}`)
    li.remove()
}