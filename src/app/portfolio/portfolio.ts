import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {


items=[
  '/poert1.png',
  '/poert2.png',
  '/poert3.png',
  '/poert1.png',
  '/poert2.png',
  '/poert3.png'
]

imgUrl:string='';

openImg(event:HTMLDivElement){
  event.classList.remove('d-none');
    event.classList.add('d-block');

}


closeImg(event:HTMLDivElement){
  event.classList.remove('d-block');
    event.classList.add('d-none');

}


getImg(event:HTMLDivElement){

this.imgUrl=event.getAttribute('src')!;
}


stopmouseclick(event:MouseEvent){
event.stopPropagation();
}


}
