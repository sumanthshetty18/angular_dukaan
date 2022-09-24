import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  mobiles:any[]=[
    {
      "mid":1,
      "m_brand":"Redmi",
      "m_model":"Note 10 Pro",
      "m_img":"https://rukminim1.flixcart.com/image/416/416/l0h1g280/mobile/g/f/k/-original-imagc9cqaegfn486.jpeg?q=70",
      "m_price":"15900",
      "m_descr":"Vintage Bronze, 6GB RAM, 128GB Storage",
      "m_status":"Instock"
    },
    {
      "mid":2,
      "m_brand":"Realme",
      "m_model":"9 Pro",
      "m_img":"https://rukminim1.flixcart.com/image/416/416/kzogn0w0/mobile/9/u/s/-original-imagbmf2fttpg4xb.jpeg?q=70",
      "m_price":"20999",
      "m_descr":"Midnight Black, 8GB RAM, 128GB Storage",
      "m_status":"Instock"
    },
    {
      "mid":3,
      "m_brand":"Oppo",
      "m_model":"A54",
      "m_img":"https://rukminim1.flixcart.com/image/416/416/knni7ww0/mobile/3/v/s/a54-cph2239-oppo-original-imag2aycn2mzch4x.jpeg?q=70",
      "m_price":"23990",
      "m_descr":"Starry Blue, 6GB RAM, 128GB Storage",
      "m_status":"Out of Stock"
    },
    {
      "mid":4,
      "m_brand":"Vivo",
      "m_model":"V23 Pro 5G",
      "m_img":"https://rukminim1.flixcart.com/image/416/416/ky0g58w0/mobile/j/b/c/-original-imagabvqgqdhaacc.jpeg?q=70",
      "m_price":"38990",
      "m_descr":"Sunshine Gold, 6GB RAM, 128 GB Storage",
      "m_status":"Instock"
    },
    {
      "mid":5,
      "m_brand":"Samsung",
      "m_model":"Galaxy A53",
      "m_img":"https://rukminim1.flixcart.com/image/416/416/l3xcr680/mobile/f/b/6/-original-imagexeyn7p8ehzh.jpeg?q=70",
      "m_price":"32999",
      "m_descr":"Awesome Black, 128 GB Storage,8 GB RAM",
      "m_status":"Out of Stock"
    },
    {
      "mid":6,
      "m_brand":"Redmi",
      "m_model":"10A",
      "m_img":"https://rukminim1.flixcart.com/image/416/416/l31x2fk0/mobile/4/8/k/10a-220233l2i-redmi-original-image9efzh2nrdgp.jpeg?q=70",
      "m_price":"9500",
      "m_descr":"Sea Blue, 64 GB Storage, 4 GB RAM",
      "m_status":"Instock"
    },
    {
      "mid":7,
      "m_brand":"Asus",
      "m_model":"ROG Phone 3",
      "m_img":"https://rukminim1.flixcart.com/image/416/416/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6nmyuyekd.jpeg?q=70",
      "m_price":"46999",
      "m_descr":"Black, 128 GB Storage, 8 GB RAM",
      "m_status":"Out of Stock"
    },
    {
      "mid":8,
      "m_brand":"Samsung",
      "m_model":"Galaxy F23 5G",
      "m_img":"https://rukminim1.flixcart.com/image/416/416/l3hmwsw0/mobile/l/k/q/-original-imagehzbaw2wugme.jpeg?q=70",
      "m_price":"13499",
      "m_descr":"Copper Blush, 128 GB Storage, 6 GB RAM",
      "m_status":"Out of Stock"
    },
    {
      "mid":9,
      "m_brand":"Realme",
      "m_model":"C33",
      "m_img":"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70",
      "m_price":"9999",
      "m_descr":"Aqua Blue, 64 GB Storage, 4 GB RAM",
      "m_status":"Instock"
    }
  ]
    

}
