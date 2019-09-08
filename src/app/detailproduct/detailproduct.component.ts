import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
  student =
    [
      {
        fullName: 'Nguyễn Văn Tèo',
        birthday: '20-01-1999',
        gender: 'Nam',
        photo: 'https://i.pinimg.com/originals/7e/7b/f6/7e7bf68999ed12f4393a2ef81750675b.png',
        mark: 8.5
      }, {
        fullName: 'Phan thị nở',
        birthday: '20-12-1999',
        gender: 'Nữ',
        photo:
          'https://i.pinimg.com/originals/7e/7b/f6/7e7bf68999ed12f4393a2ef81750675b.png',
        mark: 8.5
      },
      {
        fullName: 'Nguyễn khá Bảnh',
        birthday: '20-01-2000',
        gender: 'Nam',
        photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/629c1f14015191.5627be627c443.png',
        mark: 8.5
      },
    ]
  constructor() { }

  ngOnInit() {
  }

}
