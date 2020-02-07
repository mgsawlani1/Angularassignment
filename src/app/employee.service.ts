import { Injectable } from '@angular/core';
import { Employee } from './employee-list/employee';

@Injectable()
export class EmpService {
    EmpList: Array<Employee>
    constructor() {
        this.EmpList = new Array<Employee>();
        let p1 = new Employee(1, "Angular CookBook", "Technical", 240, "assets/images/angular.jpg");
        let p2 = new Employee(2, "Ajax for Dummies", "Technical", 640, "assets/images/ajax.jpg");
        let p3 = new Employee(3, "Life Rules", "Self help", 540, "assets/images/liferules.jpg");
        let p4 = new Employee(4, "Tinkle", "Comic", 140, "assets/images/tinkle.jpg");
        let p5 = new Employee(5, "You can Win", "Self help", 440, "assets/images/youcanwin.jpg");
        this.EmpList.push(p1);
        this.EmpList.push(p2);
        this.EmpList.push(p3);
        this.EmpList.push(p4);
        this.EmpList.push(p5);
    }
    getProducts() {
        return this.EmpList;
    }
}
