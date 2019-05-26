import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuariosCoreComponent } from './lista-usuarios-core.component';

describe('ListaUsuariosCoreComponent', () => {
  let component: ListaUsuariosCoreComponent;
  let fixture: ComponentFixture<ListaUsuariosCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUsuariosCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuariosCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
