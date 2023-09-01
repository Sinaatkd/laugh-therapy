import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalloonsPage } from './balloons.page';

describe('BalloonsPage', () => {
  let component: BalloonsPage;
  let fixture: ComponentFixture<BalloonsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BalloonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
