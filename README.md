# toDoList-js
If you want to use this toDoList on your website. You'll need to do a sturcture шn your html file that will look like this.
 <div class="list"> <!--This class can be named whatever your want -->
            <div class="list__title">Title of your list</div>
            <div class="list__items">
                <div class='list__item'>
                 <div class="list__item__text">some text of your item</div>
                 <div data-close class="list__item__remove">&times;</div>`;
                 </div>
                <!-- This items will be created automatically with these classes. -->
            </div>
            <form class="add__form" action="#">
                <input type="text" id="add__text" value="">
                <button type="submit" class="btn-info" id="add__task" value="">Add task</button>
            </form>
            <!--Classes on form can be named whatever your want -->
 </div>

 
