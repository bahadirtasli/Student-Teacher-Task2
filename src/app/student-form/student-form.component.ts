import { Component } from '@angular/core';
import {Student} from "../shared/modules/Student";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  students : Student[] = [];

  firstName : string = ' ';
  lastName : string = ' ';

  Age : string = ' ';

  eMail : string = ' ';

  isShowForm : boolean = true;


  addStudent(studentForm: NgForm) {
    this.students.push(new Student(this.firstName,this.lastName,this.Age,this.eMail))
    studentForm.reset();

  }
}
