import { Component, OnInit } from '@angular/core';
import { Todo } from 'todo';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/services/todo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalContentComponentComponent } from '../modal-content-component/modal-content-component.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  Todos: Todo[] = [];
  faCheck = faCheck;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private todoService: TodoService, private modalService: BsModalService){}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void{
    this.todoService.getTodos().subscribe(todos => this.Todos = todos as any as Todo[]);
  }

  getTodoById(todo: Todo): void{
    this.todoService.getTodosById(todo.id).subscribe(todo => {
      this.Todos = this.Todos.map(t => (t.id === todo.id ? todo : t));
    })
  }

  updateTodo(todo: Todo): void {
    const updatedTodo: Todo = { ...todo, completed: !todo.completed };
    this.todoService.updateTodo(updatedTodo).subscribe(() => {
      this.Todos = this.Todos.map(t => (t.id === updatedTodo.id ? updatedTodo : t));
    });
  }

  deleteTodo(todo: Todo): void{
    this.todoService.deleteTodo(todo.id).subscribe(() => {
      this.Todos = this.Todos.filter(t => t.id !== todo.id);
    })
  }

  openModal(){
      const modalRef: BsModalRef = this.modalService.show(ModalContentComponentComponent);
  }
}
