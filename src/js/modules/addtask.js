
function addTask(listName,addTaskBtn,listItemsName,removeBtn,itemText){
    function changeValues(){
        listItems = document.querySelectorAll(listItemsName);
        removeItemBtn = document.querySelectorAll(removeBtn);
        itemsText = document.querySelectorAll(itemText);
    }
    const list = document.querySelector(listName);
    const addTaskForm = document.querySelector(addTaskBtn);
    let listItems;
    let removeItemBtn;
    let itemsText;
    list.innerHTML='';


    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
        continue;
        }
        console.log(`${key}: ${localStorage.getItem(key)}`);
        list.innerHTML+=`<div class="list__item"> ${localStorage.getItem(key)} </div>`;
    }
    addTaskForm.addEventListener('click',(e)=>{
        e.preventDefault();
        const value = document.querySelector('#add__text');
        if(value.value!==''){
            const element = document.createElement('div');
            element.classList.add('list__item');
            element.innerHTML=`
                <div class="list__item__text">${value.value}</div>
                <div data-close class="list__item__remove">&times;</div>`;
            list.append(element);
            localStorage.setItem(value.value,element.innerHTML);
        }
        else{
            value.value="Input task";
            setTimeout(() => {
                value.value="";
            }, 1500);
        }
        value.value='';
    });
    //delete items
    let intervalId = setInterval(()=>{
        changeValues();
        listItems.forEach((e,i)=>{
            removeItemBtn[i].addEventListener('click',()=>{
                e.remove();
                localStorage.removeItem(e.textContent.trim().slice(0,-18));
            });
        });
    },200);
}
export  {addTask};