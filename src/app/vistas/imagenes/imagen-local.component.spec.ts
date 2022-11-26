import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenLocalComponent } from './imagen-local.component';

describe('ImagenLocalComponent', () => {
  let component: ImagenLocalComponent;
  let fixture: ComponentFixture<ImagenLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
