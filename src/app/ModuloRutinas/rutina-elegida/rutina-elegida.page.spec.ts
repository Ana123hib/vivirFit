import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinaElegidaPage } from './rutina-elegida.page';

describe('RutinaElegidaPage', () => {
  let component: RutinaElegidaPage;
  let fixture: ComponentFixture<RutinaElegidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RutinaElegidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
