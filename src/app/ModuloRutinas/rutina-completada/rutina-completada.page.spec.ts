import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinaCompletadaPage } from './rutina-completada.page';

describe('RutinaCompletadaPage', () => {
  let component: RutinaCompletadaPage;
  let fixture: ComponentFixture<RutinaCompletadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RutinaCompletadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
