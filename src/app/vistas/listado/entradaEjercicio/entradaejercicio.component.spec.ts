import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaejercicioComponent } from './entradaejercicio.component';

describe('EntradaejercicioComponent', () => {
  let component: EntradaejercicioComponent;
  let fixture: ComponentFixture<EntradaejercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaejercicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaejercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
