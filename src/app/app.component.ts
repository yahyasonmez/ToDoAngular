import { Component } from '@angular/core';
import { Todo } from './Models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  TodoList: Todo[] = [];

  Todo: Todo = { Completed: false, ItemName:''};
  
  // Ekleme işlemleri yapılır
  AddItem(){
    console.log('Eklenen Item: ' + this.Todo.ItemName);
    console.log(this.TodoList);
    
    //Item ekleme işlemi yapılır
    this.TodoList.push({ Completed:this.Todo.Completed, ItemName:this.Todo.ItemName });
    
    // ekleme işlemi sonrasında input içeriğini boşaltmak için boş değer atanır
    this.Todo.ItemName = '';
  }

  /**
   * console.log(null == undefined); // 👉️ true
   * console.log(null === undefined); // 👉️ false
   */
  // Tamamlama işlemleri yapılır
  CompleteItem(todo: Todo){
    // Listeden ilgili Item bulunur
    let currentTodo: Todo | undefined = this.TodoList.find(x=>x.ItemName == todo.ItemName);
    console.log(currentTodo);
    // bulunan item boş değilse; item.Completed değeri true olarak atanır
    if(currentTodo != undefined){
      currentTodo.Completed = true;
    }
    console.log(currentTodo);
  }

  // Silme işlemleri yapılır
  DeleteItem(todo : Todo) {
    let currentTodoIndex = this.TodoList.indexOf(todo);
    this.TodoList.splice(currentTodoIndex,1);
  }

}
