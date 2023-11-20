import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinaCronometroPage } from './rutina-cronometro.page';

describe('RutinaCronometroPage', () => {
  let component: RutinaCronometroPage;
  let fixture: ComponentFixture<RutinaCronometroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RutinaCronometroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
