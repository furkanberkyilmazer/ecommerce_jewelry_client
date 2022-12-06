import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/address/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-orders-address',
  templateUrl: './orders-address.component.html',
  styleUrls: ['./orders-address.component.css']
})
export class OrdersAddressComponent implements OnInit {

  constructor(
    private addressService:AddressService
    ) { }
  @Input() addressId:number | undefined;
  address:Address=new Address();

  ngOnInit(): void {
  
    this.addressService.getAddressesById(this.addressId).subscribe(data=>{

      this.address=data.data;
    })
  }

}
