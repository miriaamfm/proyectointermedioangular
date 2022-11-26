import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaApiComponent } from './entrada-api.component';

describe('EntradaApiComponent', () => {
  let component: EntradaApiComponent;
  let fixture: ComponentFixture<EntradaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
