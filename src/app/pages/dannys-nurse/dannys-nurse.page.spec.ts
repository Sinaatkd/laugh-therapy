import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DannysNursePage } from './dannys-nurse.page';

describe('DannysNursePage', () => {
  let component: DannysNursePage;
  let fixture: ComponentFixture<DannysNursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DannysNursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
