import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestroyBadCellPage } from './destroy-bad-cell.page';

describe('DestroyBadCellPage', () => {
  let component: DestroyBadCellPage;
  let fixture: ComponentFixture<DestroyBadCellPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DestroyBadCellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
