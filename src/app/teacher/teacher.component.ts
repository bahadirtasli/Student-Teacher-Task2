import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from "../shared/modules/teacher";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{

  @Input() teacherTitle : string = '';

  @Input() teachers : Teacher [] = [];

  ngOnInit(): void {
  }


}
