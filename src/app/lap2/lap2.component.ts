import { Component, OnInit } from '@angular/core';
import { students } from '../student'



@Component({
  selector: 'app-lap2',
  templateUrl: './lap2.component.html',
  styleUrls: ['./lap2.component.css']
})
export class Lap2Component implements OnInit {
  
  listStudents = []
  onDeleteStudent(id) {
    let isDelete = confirm("Xác Nhận Xóa ???")
    if (isDelete) {
      let temp = this.listStudents.filter(student => {
        return student.ID !== id
      })
      this.listStudents = [...temp]
    }
  }
  constructor() { }

  ngOnInit() {
  }
  students= [...students]

}
