import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementarComponent } from './complementar.component';

describe('ComplementarComponent', () => {
  let component: ComplementarComponent;
  let fixture: ComponentFixture<ComplementarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
