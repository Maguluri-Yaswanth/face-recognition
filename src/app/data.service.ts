import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  recognizedFaces(boxes){
    const params = boxes;
    return this.httpClient.post(this.REST_API_SERVER+'/recognizedFaces', params);
  }
}
 