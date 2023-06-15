import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from 'todo';
import { Todos } from 'mock-todo';
import { TodoService } from 'src/app/services/todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  
  id: number = 0;
  title: string = '';
  completed: boolean = false;

  constructor(private todoService: TodoService, private location: Location) { }

  ngOnInit(): void {}

  onSubmit(){
    if(this.title == null){
      alert('Please insert a todo');
      return;
    }

    const newTodo = {
      id: this.id,
      title: this.title,
      completed: this.completed
    }

    this.todoService.createTodo(newTodo).subscribe(createdTodo => {
      this.onAddTodo.emit(createdTodo);    
    })

    if(newTodo){
      this.location.historyGo();
    }
    
    this.title = "";
    this.completed = false;    
  }

  submitForm(){
    this.onSubmit()
  }
}
