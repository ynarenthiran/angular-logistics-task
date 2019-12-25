import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
const whatsapp = env.whatsapp;
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(
    private http: HttpClient
  ) { }
  sendMessage(data) {
    return this.http.post(`https://eu38.chat-api.com/instance${whatsapp.instanceId}/sendMessage?token=${whatsapp.token}`, data);
  }
}
