import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  title = 'GFG'; 
  
  images: any[] = [ 
      { 
          previewImageSrc: 
          'assets/banners/daraz.jpg', 
          thumbnailImageSrc: 
          'assets/banners/banner1.jpg',
          alt: 'Cascading Style Sheet', 
          title: 'CSS'
      }, 
      { 
          previewImageSrc: 
          'assets/banners/daraz1.jpg',
          thumbnailImageSrc: 
          'assets/banners/banner2.jpg',
          alt: 'Angular for Front end', 
          title: 'Angular'
      }, 
      { 
          previewImageSrc: 
          'assets/banners/daraz3.jpg',
          thumbnailImageSrc: 
          'assets/banners/banner3.jpg',
          alt: 'Java Programming Language', 
          title: 'Java'
      }, 
      { 
          previewImageSrc: 
          'assets/banners/daraz.jpg',
          thumbnailImageSrc: 
          'assets/banners/banner4.jpg',
          alt: 'HyperText Markup Language', 
          title: 'HTML'
      }, 
  ]; 

}
