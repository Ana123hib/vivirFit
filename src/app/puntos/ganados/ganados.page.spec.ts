import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GanadosPage } from './ganados.page';

describe('GanadosPage', () => {
  let component: GanadosPage;
  let fixture: ComponentFixture<GanadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GanadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
