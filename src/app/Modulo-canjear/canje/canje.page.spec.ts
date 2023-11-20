import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanjePage } from './canje.page';

describe('CanjePage', () => {
  let component: CanjePage;
  let fixture: ComponentFixture<CanjePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CanjePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
