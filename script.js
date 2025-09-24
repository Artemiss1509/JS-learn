document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    const usersList = JSON.parse(localStorage.getItem('usersList')) || [];
    for (let i = 0; i < usersList.length; i++){
        display(usersList[i])
    }

    }

function handleFormSubmit(event) {
    event.preventDefault();
    const expenseName = event.target.expenseName.value;
    const expenseAmount = event.target.expenseAmount.value;
    const expenseCat = event.target.expenseCat.value
    
    const data = {
        expenseName,
        expenseAmount,
        expenseCat
    }
    const usersList = JSON.parse(localStorage.getItem('usersList')) || [];
    data.id=Date.now()
    usersList.push(data);

    display(data);
    localStorage.setItem('usersList', JSON.stringify(usersList));

    event.target.reset();

    }

function display(data) {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const edtBtn = document.createElement('button');
    li.textContent = data.expenseName + ": ₹" + data.expenseAmount +" - "+data.expenseCat;
    delBtn.textContent = 'Delete'
    edtBtn.textContent = 'Edit'
    delBtn.addEventListener('click', () => deleteData(li,data.id));
    edtBtn.addEventListener('click', () => editData(li, data));

    li.appendChild(delBtn)
    li.appendChild(edtBtn)

    ul.appendChild(li);
    
    }

function editData(li, data) {
    document.getElementById('expenseName').value = data.expenseName;
    document.getElementById('expenseAmount').value = data.expenseAmount;
        
    deleteData(li, data.id);
}

function deleteData(li, id) {
    const usersList = JSON.parse(localStorage.getItem('usersList')) || [];
    const newList = [];
    for (let i = 0; i < usersList.length; i++){
        if (id != usersList[i].id) {
            newList.push(usersList[i])
        }
    }
    localStorage.setItem('usersList', JSON.stringify(newList));
    li.remove()
}