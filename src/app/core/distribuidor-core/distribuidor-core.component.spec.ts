import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuidorCoreComponent } from './distribuidor-core.component';

describe('DistribuidorCoreComponent', () => {
  let component: DistribuidorCoreComponent;
  let fixture: ComponentFixture<DistribuidorCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribuidorCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuidorCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
