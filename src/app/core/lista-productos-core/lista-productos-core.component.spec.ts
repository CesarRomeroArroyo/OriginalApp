import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductosCoreComponent } from './lista-productos-core.component';

describe('ListaProductosCoreComponent', () => {
  let component: ListaProductosCoreComponent;
  let fixture: ComponentFixture<ListaProductosCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProductosCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductosCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
