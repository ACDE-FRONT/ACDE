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
  error_val: string = ''
  state = 'block'
  detail = 'block'
  btn_state = 'show'
  btn_state2 = 'show'
  po_s: any
  po_n: string = ''
  big: any[] = []
  constructor (private service: DetailService) {}
  console = console
  clickme () {
    this.state = 'block'
    this.detail = 'block'
    this.btn_state = 'show'
    this.big = []
    if (this.link != '') {
      this.service.getDetails(this.link).subscribe(response => {
        this.po_s = response
        this.error_val = ''
        this.po_n = this.po_s[0][0].PO_Number
        this.state = 'detail'
        this.big.push(
          {
            legend: 'Purchase Order',
            data: [
              { name: 'PO Number', val: this.po_n },
              { name: 'From', val: this.po_s[0][0].Company },
              { name: 'For', val: this.po_s[0][0].Destination },
              { name: 'Final Delivery', val: 'Unknown' },
              { name: 'Date of order', val: this.po_s[0][0].Delivery_Date }
            ]
          },
          { legend: 'Vendor', data: [{ name: 'Vendor', val: 'Unknown' }] },
          {
            legend: 'From',
            data: [
              { name: 'Requested By', val: this.po_s[0][0].Company },
              { name: 'Phone', val: 'Unknown' },
              { name: 'Fax', val: 'Unknown' },
              { name: 'Email', val: 'Unknown' }
            ]
          },
          {
            legend: 'Vendor Contact',
            data: [
              { name: 'Attention', val: 'Unknown' },
              { name: 'Phone', val: 'Unknown' },
              { name: 'Fax', val: 'Unknown' },
              { name: 'Email', val: 'Unknown' }
            ]
          },
          {
            legend: 'Terms',
            data: [
              { name: 'Currency', val: 'Unknown' },
              { name: 'Payment Terms', val: 'Unknown' },
              { name: 'Freight Terms', val: 'Unknown' },
              { name: 'Freight Charges', val: 'Unknown' }
            ]
          },
          {
            legend: 'Delivery Detail',
            data: [
              { name: 'Shiping Method', val: 'Unknown' },
              { name: 'Deliver', val: 'Unknown' },
              { name: 'Delivery Place', val: this.po_s[0][0].Delivery_Place },
              { name: 'Attention', val: 'Unknown' }
            ]
          },
          {
            legend: 'Send Invoice To',
            data: [
              { name: 'Invoice', val: 'Unknown' },
              { name: 'Mailing', val: 'Unknown' },
              { name: 'Address', val: 'Unknown' }
            ]
          },
          {
            legend: 'Delivery Address',
            data: [
              { name: 'Deliver', val: 'Unknown' },
              { name: 'Goods', val: 'Unknown' },
              { name: 'to', val: 'Unknown' }
            ]
          }
        )
      }, (error) => {
        this.error_val = 'No record found!'
      })
    } else {
      this.error_val = 'No link entered please enter a link!'
    }
  }

  showDetail () {
    this.detail = 'unblock'
    this.btn_state = 'unshow'
  }

  hideDetail () {
    this.detail = 'block'
    this.btn_state = 'show'
  }
}
