import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const key = "sk-E7nZmX5kD18XBUp7pqxdVGhlQi5BSQEbgdIZQzIs0TJFtijA"

@Injectable({
  providedIn: 'root'
})

export class OpenaiService {

  constructor(private http: HttpClient) { }

  sendQuestion(prompt: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json'
    });

    const body = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": prompt
        }
      ],
      "stream": false
    };

    return this.http.post('https://api.theb.ai/v1/chat/completions', body, { headers });
  }
}
