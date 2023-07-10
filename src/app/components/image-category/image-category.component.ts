import { Component } from '@angular/core';

@Component({
  selector: 'app-image-category',
  templateUrl: './image-category.component.html',
  styleUrls: ['./image-category.component.scss']
})
export class ImageCategoryComponent {

  categories: any[] = [
    {
      category: 'abstract',
      label: 'astratti'
    },{
      category: 'animals',
      label: 'animali'
    },{
      category: 'business',
      label: 'economia'
    },{
      category: 'cats',
      label: 'gatti'
    },{
      category: 'city',
      label: 'città'
    },{
      category: 'transport',
      label: 'trasporti'
    }
  ];
  selectedCategory: string = this.categories[0].category;
  url: string = "https://loremflickr.com/320/240";

  setUrl(cat: any): void{
    this.selectedCategory = cat.category;
  }

  getUrl(): string {
    return this.url+"/"+this.selectedCategory;
  }
}
