"use strict";
import {addTask} from './modules/addtask';
window.addEventListener('DOMContentLoaded',()=>{
  addTask('.list__items','#add__task','.list__item','.list__item__remove','.list__item__text');
}); 
                