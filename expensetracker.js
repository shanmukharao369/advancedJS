function saveToLocalStorage(event) {
    event.preventDefault();
    const Expenseamount = event.target.Expenseamount.value;
    const Description = event.target.Description.value;
    const Category = event.target.Category.value;

    const obj = {
        Expenseamount,
        Description,
        Category
    }
    axios.post("https://crudcrud.com/api/7993cc6012f84b31ae77e9215d74c654/expenseData",obj)
      .then((Response)=>{
        showNewExpensesOnScreen(Response.data)
        console.log(Response)
      })
      .catch((err)=>{
        console.log(err)
      })
}

window.addEventListener('DOMContentLoaded', () => {
  axios.get("https://crudcrud.com/api/7993cc6012f84b31ae77e9215d74c654/expenseData")
    .then((Response)=>{
      console.log(Response)
      for(var i=0;i<Response.data.length;i++){
        showNewExpensesOnScreen(Response.data[i])
      }       
    })
    .catch((err)=>{
        console.log(err)
    })
})

function showNewExpensesOnScreen(expense){
  document.getElementById('Description').value = '';
  document.getElementById('Expenseamount').value = '';
  document.getElementById('Category').value = '';
  if(localStorage.getItem(expense.Description) !== null){
    removeExpensesFromScreen(expense.Description)
  }

  const parentNode = document.getElementById('TotalExpenses');
  const childHtml = `<li id=${expense._id}> ${expense.Expenseamount}-${expense.Description}-${expense.Category}
                          <button onclick = deleteExpenses('${expense._id}')>Delete </button>
                          <button onclick = editExpensesDetails('${expense.Description}','${expense.Expenseamount}','${expense.Category}','${expense._id}')>Edit </button>

                      </li> `

  parentNode.innerHTML=parentNode.innerHTML+childHtml;
}
//edit function

function editExpensesDetails(Descriptions,Expenseamount,Category,userId){
  document.getElementById('Description').value = Descriptions;
  document.getElementById('Expenseamount').value = Expenseamount ;
  document.getElementById('Category').value = Category;

  deleteExpenses(userId)

}

//delete function

function deleteExpenses(userId){
  axios.delete(`https://crudcrud.com/api/7993cc6012f84b31ae77e9215d74c654/expenseData/${userId}`)
  .then((Response)=>{
    removeExpensesFromScreen(userId)
  })
  .catch((err)=>{
    console.log(err)
  })
}

function removeExpensesFromScreen(Descriptions){
  const parentNode = document.getElementById('TotalExpenses');
  const childNodeToBeDeleted = document.getElementById(Descriptions);
  if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted)
  }
}
