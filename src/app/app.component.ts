import { Component } from '@angular/core'
import { DetailService } from './services/detail.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkpoint'
  link: string = ''
  po_s: any
  po_n: string = ''
  constructor (private service: DetailService) {}
  console = console
  clickme () {
    this.service.getDetails(this.link).subscribe(response => {
      this.po_s = response
      this.po_n = this.po_s[0][0].PO_Number
    })
  }
}
