import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../shared/modules/Student";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  @Input() studentTitle : string = '';

  @Input() students : Student[] = [];


  ngOnInit(): void {
  }

}
