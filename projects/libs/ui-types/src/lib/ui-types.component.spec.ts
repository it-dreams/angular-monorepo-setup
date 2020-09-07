import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTypesComponent } from './ui-types.component';

describe('UiTypesComponent', () => {
  let component: UiTypesComponent;
  let fixture: ComponentFixture<UiTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
