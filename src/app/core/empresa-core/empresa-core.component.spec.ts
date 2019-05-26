import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaCoreComponent } from './empresa-core.component';

describe('EmpresaCoreComponent', () => {
  let component: EmpresaCoreComponent;
  let fixture: ComponentFixture<EmpresaCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
