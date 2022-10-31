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
    localStorage.setItem(obj.Description,JSON.stringify (obj));
    showNewExpensesOnScreen(obj);
}

window.addEventListener('DOMContentLoaded', (event) => {
  Object.keys(localStorage).forEach(key => {
    const user = JSON.parse(localStorage.getItem(key))
    showNewExpensesOnScreen(user)
  })
})

function showNewExpensesOnScreen(user){

  const parentNode = document.getElementById('TotalExpenses');
  const childHtml = `<li id=${user.Description}> ${user.Expenseamount}-${user.Description}-${user.Category}
                          <button onclick = deleteExpenses('${user.Description}')>Delete </button>
                          <button onclick = editExpensesDetails('${user.Description}','${user.Expenseamount}','${user.Category}')>Edit </button>

                      </li> `

  parentNode.innerHTML=parentNode.innerHTML+childHtml;
}
//edit function

function editExpensesDetails(Descriptions,Expenseamount,Category){
  document.getElementById('Description').value = Descriptions;
  document.getElementById('Expenseamount').value = Expenseamount ;
  document.getElementById('Category').value = Category;

  deleteExpenses(Descriptions)

}

//delete function

function deleteExpenses(Descriptions){
  console.log(Descriptions)
  localStorage.removeItem(Descriptions);
  removeExpensesFromScreen(Descriptions);
}

function removeExpensesFromScreen(Descriptions){
  const parentNode = document.getElementById('TotalExpenses');
  const childNodeToBeDeleted = document.getElementById(Descriptions);
  if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted)
  }
}

