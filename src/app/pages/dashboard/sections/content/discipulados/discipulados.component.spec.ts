import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscipuladosComponent } from './discipulados.component';

describe('DiscipuladosComponent', () => {
  let component: DiscipuladosComponent;
  let fixture: ComponentFixture<DiscipuladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscipuladosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscipuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
