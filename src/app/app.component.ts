import {Component, OnInit} from '@angular/core';
import {Student} from "./shared/modules/Student";
import {Teacher} from "./shared/modules/teacher";
import {find} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ANGULAR LİST TASK2';
  ngOnInit(): void {

    this.students = this.fetchStudents();
    this.teachers = this.fetchTeachers();
  }


  teachers : Teacher [] = [];

  teacherNames: string[] = ["Marko", "John", "Bruno", "Jim"];
  teacherLastNames: string[] = ["Piir", "Smith", "Musk", "Branson"];
  teacherAge: string[] = ["20", "22", "23", "65"]
  teacherEmail: string[] = ["js@gmail.com", "mp@gmail.com", "bm@gmail.com", "jb@gmail.com"]


  fetchStudents() : Student[] {

    let newStudent : Student [] = [];



    newStudent.push(new Student('Bahadir','Tasli','30','bhdr@gmail.com'));


    return newStudent;

  }

  fetchTeachers() : Teacher[] {

    let newTeacher : Teacher [] = [];

    newTeacher.push(new Teacher('Vinod','John','33','vinod@gmail.com'));
    newTeacher.push(new Teacher("Uche","Ahunanya","29","uche@gmail.com"));

    return newTeacher;

  }


  students : Student[] = [];
  studentNames: string[] = ['Baha',"Josep","Bro","Jimmy"];
  studentLastNames: string[] = ["Tas","Smith","Elon","Bra"];
  studentAges: string[] = ["30", "32", "33", "35"]
  studentEmails: string[] = ["bt@gmail.com", "js@gmail.com", "be@gmail.com", "jb@gmail.com"]

  studentTitle = 'List of Students';

  teacherTitle = 'List of Teachers' ;

  addStudent() {

    let studentName = this.studentNames.at(Math.random() * this.students.length);
    let studentLastName = this.studentLastNames.at(Math.random() * this.students.length);
    let studentAge = this.studentAges.at(Math.random() * this.students.length);
    let studentEmail = this.studentEmails.at(Math.random() * this.students.length);

    // @ts-ignore
    this.students.push(new Student(studentName,studentLastName,studentAge,studentEmail));

  }


  addTeacher() {
    let teacherName = this.teacherNames.at(Math.random() * this.teachers.length);
    let teacherLastName = this.teacherLastNames.at(Math.random() * this.teachers.length);
    let teacherAges = this.teacherAge.at(Math.random() * this.teachers.length);
    let teacherEmails = this.teacherEmail.at(Math.floor(Math.random()) * this.teachers.length);

    // @ts-ignore
    this.teachers.push(new Teacher(teacherName, teacherLastName, teacherAges, teacherEmails));
  }



}


