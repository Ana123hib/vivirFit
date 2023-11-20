import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogContenidoPage } from './blog-contenido.page';

describe('BlogContenidoPage', () => {
  let component: BlogContenidoPage;
  let fixture: ComponentFixture<BlogContenidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlogContenidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
