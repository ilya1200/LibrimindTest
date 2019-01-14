import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { infCompany } from './infCompany';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companies:infCompany[]=[];

  constructor(private http:HttpClient) { 
  }

  getCompanies(){
    return this.companies;
  }

  setCompanies(callback:Function):void{
    const url="assets/testdata.json";
    this.http.get<any>(url).subscribe((response)=>{
      for(let prop in response){
        this.companies.push(response[prop]);
      }
      callback(this.companies);
    });
  }




}
