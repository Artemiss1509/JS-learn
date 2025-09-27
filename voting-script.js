document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    axios.get("https://crudcrud.com/api/5c624113c3cc4c058f1dcfb2b5200d3a/rohan").then(res=>{for (let i = 0; i < res.data.length; i++){
        display(res.data[i])
    };countVotes('rohan');}).catch(err=>console.log(err))
    axios.get("https://crudcrud.com/api/5c624113c3cc4c058f1dcfb2b5200d3a/tyan").then(res=>{for (let i = 0; i < res.data.length; i++){
        display(res.data[i])
    };countVotes('tyan');}).catch(err=>console.log(err))
    axios.get("https://crudcrud.com/api/5c624113c3cc4c058f1dcfb2b5200d3a/sara").then(res=>{for (let i = 0; i < res.data.length; i++){
        display(res.data[i])
    };countVotes('sara');}).catch(err=>console.log(err))
    
    }

function handleFormSubmit(event) {
    event.preventDefault();

    const data = {
        name:event.target.studentName.value,
        vote:event.target.classReps.value,
    }

    if(data.vote === 'rohan'){
        axios.post("https://crudcrud.com/api/5c624113c3cc4c058f1dcfb2b5200d3a/rohan",data).then(res=>{display(res.data);countVotes('rohan')}).catch(err=>console.log(err))
    }else if(data.vote==='tyan'){
        axios.post("https://crudcrud.com/api/5c624113c3cc4c058f1dcfb2b5200d3a/tyan",data).then(res=>{display(res.data);countVotes('tyan')}).catch(err=>console.log(err))
    }else if(data.vote==='sara'){
        axios.post("https://crudcrud.com/api/5c624113c3cc4c058f1dcfb2b5200d3a/sara",data).then(res=>{display(res.data);countVotes('sara')}).catch(err=>console.log(err))
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
function countVotes(name){
    axios.get(`https://crudcrud.com/api/5c624113c3cc4c058f1dcfb2b5200d3a/${name}`).then(res=>{const count1 = document.getElementById(`${name}_count`);
    count1.innerHTML=`Total count: ${res.data.length}`}).catch(err=>console.log(err))

}

function deleteData(li, data,name) {
    axios.delete(`https://crudcrud.com/api/5c624113c3cc4c058f1dcfb2b5200d3a/${name}/${data}`)
    li.remove()
}