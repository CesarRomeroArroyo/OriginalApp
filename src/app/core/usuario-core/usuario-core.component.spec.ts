import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCoreComponent } from './usuario-core.component';

describe('UsuarioCoreComponent', () => {
  let component: UsuarioCoreComponent;
  let fixture: ComponentFixture<UsuarioCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
