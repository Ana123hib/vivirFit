import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenidoDeCanjePage } from './contenido-de-canje.page';

describe('ContenidoDeCanjePage', () => {
  let component: ContenidoDeCanjePage;
  let fixture: ComponentFixture<ContenidoDeCanjePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContenidoDeCanjePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
