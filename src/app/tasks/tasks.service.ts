import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task/task.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:8080/api/v1/tasks"
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public saveTask(Task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.api}`, Task);
  }

  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.api}`);
  }

  public getTasksByEmployee(EmployeeId: number): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.api}/employees/${EmployeeId}`);
  }

  public deleteTask(TaskId: number) {
    return this.httpClient.delete(`${this.api}/${TaskId}`);
  }

  public getTask(TaskId: number) {
    return this.httpClient.get<Task>(`${this.api}/${TaskId}`);
  }

  public updateTask(Task: Task) {
    return this.httpClient.put<Task>(`${this.api}`, Task);
  }

    // Neue Methode zum Aktualisieren des Task-Status
    public updateTaskStatus(taskId: number, status: string) {
      return this.httpClient.patch<string>(`${this.api}/${taskId}`, { status } , { headers: this.headers });
    }
}
