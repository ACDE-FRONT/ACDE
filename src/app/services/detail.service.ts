import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private detailUrl = 'https://edi-api-test-12.herokuapp.com/get_po/?link='

  constructor (private httpClient: HttpClient) {}

  getDetails (link?: any, po_s?: any, po_n?: any, big?: any) {
    return this.httpClient.get(this.detailUrl + link)
  }
}