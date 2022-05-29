import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioBiblicoComponent } from './estudio-biblico.component';

describe('EstudioBiblicoComponent', () => {
  let component: EstudioBiblicoComponent;
  let fixture: ComponentFixture<EstudioBiblicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioBiblicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioBiblicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
