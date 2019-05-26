import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDistribuidorCoreComponent } from './lista-distribuidor-core.component';

describe('ListaDistribuidorCoreComponent', () => {
  let component: ListaDistribuidorCoreComponent;
  let fixture: ComponentFixture<ListaDistribuidorCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDistribuidorCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDistribuidorCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
