import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'todo';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json');

  createTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(`${this.apiUrl}/api/Todo`, todo, {headers: this.headers});
  }

  getTodos(): Observable<Todo>{
    return this.http.get<Todo>(`${this.apiUrl}/api/Todo`, {headers: this.headers});
  }

  getTodosById(id: number): Observable<Todo>{
    return this.http.get<Todo>(`${this.apiUrl}/api/Todo${id}`, {headers: this.headers});
  } 

  updateTodo(todo: Todo): Observable<Todo>{
    return this.http.put<Todo>(`${this.apiUrl}/api/Todo/${todo.id}`, todo, {headers: this.headers});
  }

  deleteTodo(id: number): Observable<Todo>{
    return this.http.delete<Todo>(`${this.apiUrl}/api/Todo/${id}`, {headers: this.headers});
  }
}
