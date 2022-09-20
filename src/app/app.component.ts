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
              { name: 'Revision', val: this.po_s[0][9].PO_REVISIONS },
              { name: 'From', val: this.po_s[0][9].COMPANY_NAME },
              { name: 'For', val: this.po_s[0][9].ORG_UNIT_DESTINATION_NAME },
              { name: 'Final Delivery', val: '' },
              { name: 'Date of order', val: this.po_s[0][0].PO_SENT_DATE },
              { name: 'Delivery Status', val: this.po_s[0][9].PO_DOC_STATUS }
            ]
          },
          { legend: 'Vendor', data: [{ name: 'Vendor', val: this.po_s[0][9].VENDOR_ADDRESS_1 }] },
          {
            legend: 'From',
            data: [
              { name: 'Requested By', val: this.po_s[0][9].DOC_OWNER_NAME },
              { name: 'Phone', val: '' },
              { name: 'Fax', val: '' },
              { name: 'Email', val: '' }
            ]
          },
          {
            legend: 'Vendor Contact',
            data: [
              { name: 'Attention', val: this.po_s[0][9].CONTACT_NAME },
              { name: 'Phone', val: '' },
              { name: 'Fax', val: '' },
              { name: 'Email', val: this.po_s[0][9].SEND_TO_CONTACT_EMAIL }
            ]
          },
          {
            legend: 'Terms',
            data: [
              { name: 'Currency', val: this.po_s[0][9].CURRENCY_NAME },
              { name: 'Payment Terms', val: this.po_s[0][9].PAYMENT_TERMS },
              { name: 'Freight Terms', val: this.po_s[0][9].FOB },
              { name: 'Freight Charges', val: '' }
            ]
          },
          {
            legend: 'Delivery Detail',
            data: [
              { name: 'Shiping Method', val: this.po_s[0][9].DELIVERY_ADDRESS_1 },
              { name: 'Deliver', val: this.po_s[0][9].DELIVERY_INSTRUCTIONS },
              { name: 'Delivery Place', val: this.po_s[0][9].Delivery_Place },
              { name: 'Attention', val: this.po_s[0][9].INVOICE_ADDRESS_5 }
            ]
          },
          {
            legend: 'Send Invoice To',
            data: [
              { name: 'Invoice', val: this.po_s[0][9].INVOICE_ADDRESS_1 },
              { name: 'Mailing', val: this.po_s[0][9].INVOICE_ADDRESS_3 },
              { name: 'Address', val: this.po_s[0][9].INVOICE_ADDRESS_3  + this.po_s[0][9].INVOICE_ADDRESS_4 }
            ]
          },
          {
            legend: 'Delivery Address',
            data: [
              { name: 'Deliver', val: this.po_s[0][9].DELIVER_GOODS_BY_DESCRIPTION },
              { name: 'Goods', val: '' },
              { name: 'to', val: '' }
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
