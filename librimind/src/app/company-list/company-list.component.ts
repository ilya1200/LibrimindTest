import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs';
import { infCompany } from '../infCompany';
import {Location } from '@angular/common';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  private companies:infCompany[];
  private selectedCompany:infCompany;
  selectedChild:any;
  constructor(private _companySrevice:CompanyService, private location:Location) {
  }
  


  ngOnInit() {
    this._companySrevice.setCompanies((response) => {
      this.companies= response;
    });
  }

  showCompany(company:infCompany){
    this.selectedCompany=null;
    setTimeout(() => {
      this.selectedCompany=company;
      this.location.replaceState(company.name);
    }, 0);
  }

}
