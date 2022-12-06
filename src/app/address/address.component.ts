import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AddressService } from '../services/address.service';
import { AlertifyService } from '../services/alertify.service';
import { Address } from './address';

declare var window:any;
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor( 
    private alertifyService: AlertifyService,
    private route: Router,
    private accountService:AccountService,
    private addressService:AddressService,
    ) { }
  addresses: Address[]=[];
  ngOnInit(): void {
     
    this.addressService.getAddresses(this.accountService.users.id).subscribe(data=>{
     this.addresses=data.data;

    });

  }

}
