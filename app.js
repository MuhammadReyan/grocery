


let input_Field_Container = document.querySelector('#input-field-container')
let submit = document.querySelector('.submit')
let todo_container = document.querySelector('.todo-container')
let clearBtn = document.querySelector('.clearbtn')
let grocery_container = document.querySelector('.gro')


submit.addEventListener('click', () => {
    if (input_Field_Container.value.trim().length == '')
        return;
    // console.log(input_Field_Container.value)

    // messages added 
    const alertkr = document.createElement('div')
    alertkr.className = 'alert'
    alertkr.innerText = 'item added'
    grocery_container.appendChild(alertkr)


    setTimeout(() => {
        grocery_container.removeChild(alertkr)
    }, 1000)




    const todoItemContainer = document.createElement('div')

    todoItemContainer.classList.add('todo-items-container')
    todo_container.appendChild(todoItemContainer)










    const todoText = document.createElement('p')
    todoText.className = 'todo-text'
    todoText.innerHTML = input_Field_Container.value
    todoItemContainer.appendChild(todoText)







    // deleting
    todoText.addEventListener('dbclick', () => {
        todoText.classList.add('line-through')
        editButton.setAttribute("disabled", "disabled")
    })











    // BUTTON CREATE 

    const editButton = document.createElement('button')
    editButton.className = 'edit-button'
    // ICON ADD
    const myIcon = document.createElement("i");
    myIcon.className = "fa-solid fa-pen-to-square";
    editButton.appendChild(myIcon);
    todoItemContainer.appendChild(editButton)

    editButton.addEventListener('click', () => {
        input_Field_Container.value = todoText.innerText
        const parent = editButton.parentElement
        parent.parentElement.removeChild(parent)






        // editing button message


        const alertkr = document.createElement('div')
        alertkr.className = 'alert'
        alertkr.innerText = 'Edited Item'
        grocery_container.appendChild(alertkr)


        setTimeout(() => {
            grocery_container.removeChild(alertkr)
        }, 1000)

    })







    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    // ICON ADD
    const delete_Icon = document.createElement("i");
    delete_Icon.className = "fa-solid fa-trash";
    deleteButton.appendChild(delete_Icon);
    todoItemContainer.appendChild(deleteButton)


    deleteButton.addEventListener('click', () => {
        const parent = editButton.parentElement
        parent.parentElement.removeChild(parent)


        // deleting messages
        const alertkr = document.createElement('div')
        alertkr.className = 'alert'
        alertkr.innerText = 'Delete Item'
        grocery_container.appendChild(alertkr)


        setTimeout(() => {
            grocery_container.removeChild(alertkr)
        }, 1000)













    })







    //  CLEAR ITEM 

    clearBtn.addEventListener('click', (clr) => {

      


        todoItemContainer.innerHTML = ''


    })














    input_Field_Container.value = ''

})