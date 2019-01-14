import { Component, OnInit, Input, Output } from '@angular/core';
import { infCompany } from 'src/app/infCompany';
import {Location } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  private selectedChild: infCompany;

  constructor(private location: Location) {     
  }

  @Input() public company;
  ngOnInit() {
    
  }

  showChild(child:infCompany){
    this.selectedChild=child;
    //this.location.go(child.name);
  }
}
