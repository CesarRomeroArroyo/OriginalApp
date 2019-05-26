import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigosQRCoreComponent } from './codigos-qrcore.component';

describe('CodigosQRCoreComponent', () => {
  let component: CodigosQRCoreComponent;
  let fixture: ComponentFixture<CodigosQRCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodigosQRCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigosQRCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
