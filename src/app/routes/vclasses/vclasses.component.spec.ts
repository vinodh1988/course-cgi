import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VclassesComponent } from './vclasses.component';

describe('VclassesComponent', () => {
  let component: VclassesComponent;
  let fixture: ComponentFixture<VclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
