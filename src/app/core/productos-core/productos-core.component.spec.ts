import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCoreComponent } from './productos-core.component';

describe('ProductosCoreComponent', () => {
  let component: ProductosCoreComponent;
  let fixture: ComponentFixture<ProductosCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
