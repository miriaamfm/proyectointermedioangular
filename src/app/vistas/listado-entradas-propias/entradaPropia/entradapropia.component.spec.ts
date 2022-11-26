import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaPropiaComponent } from './entradapropia.component';

describe('EntradaPropiaComponent', () => {
  let component: EntradaPropiaComponent;
  let fixture: ComponentFixture<EntradaPropiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaPropiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaPropiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
