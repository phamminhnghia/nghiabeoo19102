import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component implements OnInit {

  products =
    [
      {
        id: 1,
        img: 'https://cdn.tgdd.vn/Products/Images/44/207683/apple-macbook-pro-touch-2019-i5-14ghz-8gb-128gb-m-2-2-600x600.jpg',
        name: 'Macbook Pro',
        Price: 300000,
        quatity: 0,
      },
      {
        id: 2,
        img: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
        name: 'Iphone XSMax',
        Price: 50000,
        quatity: 0,
      },
      {
        id: 3,
        img: 'https://cdn.tgdd.vn/Products/Images/44/209451/apple-imac-27-inch-5k-retina-i5-30ghz-8gb-1tb-4gb-200x200.jpg',
        name: 'iMac',
        Price: 40000,
        quatity: 0,
      },
      {
        id: 4,
        img: 'https://cdn.tgdd.vn/Products/Images/7077/194536/apple-watch-s3-gps-42mm-vien-nhom-day-cao-su-den-nt-200x200.jpg',
        name: 'Apple Watch',
        Price: 20000,
        quatity: 0
      }
    ]
  shippingPrices
  constructor() {

  }
  // đếm số lượng
  count(e, product) {
    if (e.target.classList.contains('+')) {
      this.products.find(p => p.id == product.id).quatity++
    } else {
      if (product.quatity == 0) return
      this.products.find(p => p.id == product.id).quatity--
    }
    this.shippingPrices = this.total()
  }
  // delete sản phẩm
  deleteCart(productId) {
    console.log(productId)
    // this.products.filter(p => p.id !== productId)
    this.products.map((p, index) => {
      if (p.id == productId) {
        this.products.splice(index, 1)

      }
    })
    console.log(this.products)
  }
  // Tính tổng tiền
  total() {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    })

    var total = 0
    this.products.map(p => {
      total += p.quatity * p.Price
    })
    return formatter.format(total)
  }


  ngOnInit() {
  }

}
