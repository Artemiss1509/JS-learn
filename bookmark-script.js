document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    axios.get("https://crudcrud.com/api/a7c442b598964888a1ea0c0d40d1c711/bookmarks").then(res=>{for (let i = 0; i < res.data.length; i++){
        display(res.data[i])
    }}).catch(err=>console.log(err))
    
    }

function handleFormSubmit(event) {
    event.preventDefault();

    const data = {
        name:event.target.name.value,
        url:event.target.url.value,
    }

    axios.post("https://crudcrud.com/api/a7c442b598964888a1ea0c0d40d1c711/bookmarks",data).then(res=>display(res.data)).catch(err=>console.log(err))

    document.getElementById("name").value = "";
    document.getElementById("url").value = "";


    }

function display(data) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const edtBtn = document.createElement('button');
    const link = document.createElement('a')
    const beak = document.createElement('br')
    link.href=data.url;
    link.textContent = 'Visit';
    link.setAttribute('target', '_blank');
    li.textContent = "Name: "+data.name + ", Url: ";
    delBtn.textContent = 'Delete'
    edtBtn.textContent = 'Edit'
    delBtn.addEventListener('click', () => deleteData(li,data._id));
    edtBtn.addEventListener('click', () => editData(li, data));

    li.appendChild(link)
    li.appendChild(beak)
    li.appendChild(delBtn)
    li.appendChild(edtBtn)

    ul.appendChild(li);
    
    }

function editData(li, data) {
    document.getElementById('name').value = data.name;
    document.getElementById('url').value = data.url;
        
    deleteData(li, data._id);
}

function deleteData(li, data) {
    axios.delete(`https://crudcrud.com/api/a7c442b598964888a1ea0c0d40d1c711/bookmarks/${data}`)
    li.remove()
}