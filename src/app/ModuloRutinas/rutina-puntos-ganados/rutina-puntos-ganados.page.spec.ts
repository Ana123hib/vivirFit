import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinaPuntosGanadosPage } from './rutina-puntos-ganados.page';

describe('RutinaPuntosGanadosPage', () => {
  let component: RutinaPuntosGanadosPage;
  let fixture: ComponentFixture<RutinaPuntosGanadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RutinaPuntosGanadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
