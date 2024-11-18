import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  private readonly URL: string = 'https://jsonplaceholder.typicode.com/posts';
  posts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRequest();
  }

  private getRequest(): void {
    this.http.get(this.URL).subscribe({
      next: (data) => {
        this.posts = data as any[];
        console.log('Resposta da requisição: ', data);
      },
      error: (err) => {
        console.log('Erro na requisição: ', err);
      }
    })
  }
}
