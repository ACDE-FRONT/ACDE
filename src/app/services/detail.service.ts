import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private detailUrl = 'https://edi-api-test-12.herokuapp.com?link='
   
  constructor(private httpClient: HttpClient) { }

  getDetails(link?: any){ 
   return this.httpClient.get(this.detailUrl + link)
  }
}
