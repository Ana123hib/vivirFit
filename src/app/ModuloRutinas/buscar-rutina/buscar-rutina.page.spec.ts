import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarRutinaPage } from './buscar-rutina.page';

describe('BuscarRutinaPage', () => {
  let component: BuscarRutinaPage;
  let fixture: ComponentFixture<BuscarRutinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuscarRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
