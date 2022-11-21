/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/addtask.js":
/*!***********************************!*\
  !*** ./src/js/modules/addtask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask)
/* harmony export */ });

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_addtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addtask */ "./src/js/modules/addtask.js");


window.addEventListener('DOMContentLoaded',()=>{
  (0,_modules_addtask__WEBPACK_IMPORTED_MODULE_0__.addTask)('.list__items','#add__task','.list__item','.list__item__remove','.list__item__text');
}); 
                
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map