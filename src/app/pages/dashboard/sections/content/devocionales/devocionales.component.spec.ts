import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevocionalesComponent } from './devocionales.component';

describe('DevocionalesComponent', () => {
  let component: DevocionalesComponent;
  let fixture: ComponentFixture<DevocionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevocionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevocionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
