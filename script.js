document.addEventListener("DOMContentLoaded", initialize);

    // Don't remove anything just complete the functions

    // When the page get load display all users
function initialize() {
    const usersList = JSON.parse(localStorage.getItem('usersList')) || [];
    for (let i = 0; i < usersList.length; i++){
        display(usersList[i])
    }

    }

    // add new users in usersList array
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

    // use this function to display expenses on screen
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

    // use this function to edit user details
function editData(li, data) {
    document.getElementById('expenseName').value = data.expenseName;
    document.getElementById('expenseAmount').value = data.expenseAmount;
        
    deleteData(li, data.id);
}


    // use this function to delete the user details from local store and DOM (screen)
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