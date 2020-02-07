import { Component, OnInit } from '@angular/core';
import { EmpService } from '../employee.service';
import { Employee } from './employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  EmpList:Array<Employee>

  //typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(private service:EmpService) {
    this.EmpList =  service.getProducts();  
   }

  ngOnInit() {
  }

}
