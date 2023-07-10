import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCategoryComponent } from './image-category.component';

describe('ImageCategoryComponent', () => {
  let component: ImageCategoryComponent;
  let fixture: ComponentFixture<ImageCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCategoryComponent]
    });
    fixture = TestBed.createComponent(ImageCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
