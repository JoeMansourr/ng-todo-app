import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/services/modal-service.service';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'todo';

@Component({
  selector: 'app-modal-content-component',
  templateUrl: './modal-content-component.component.html',
  styleUrls: ['./modal-content-component.component.css']
})
export class ModalContentComponentComponent implements OnInit {
  constructor(private modalService: ModalServiceService, private todoService: TodoService) { }
  
  Todos: Todo[] = [];
  todo: Todo = { id: 0, title: '', completed: false };

  ngOnInit(): void {
    this.todoService.getTodosById(this.todo.id).subscribe(result => {
      if (result) {
        this.todo = result;
      }
    });
  }

  closeModal() {
    this.modalService.hide();
  }

  onSubmit() {
    this.todoService.updateTodo(this.todo).subscribe(() => {
      this.Todos = this.Todos.map(t => (t.id === this.todo.id ? this.todo : t));
    });
  }
}
