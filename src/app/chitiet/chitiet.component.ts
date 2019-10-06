import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
  shopping = [
    {
      tenhang: "Mũ lưỡi trai",
      dongia: "$100",
      nhacungcap: " SAMSUNG",
      chungloai: "Thời Trang",  
      // img: "../assets/images/1004.jpg"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
