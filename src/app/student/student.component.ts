import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { students, enrollments, courses } from '../student'


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student;
  grade;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
    const id = parseInt(params.get('id'))
    this.student = students.find(student => student.ID == id);
    this.grade = courses.filter(course => enrollments.filter(item => item.StudentID == id).find(en => en.CourseID == course.CourseID))
  })
  }

}
