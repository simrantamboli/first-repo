import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartremComponent } from './smartrem.component';

describe('SmartremComponent', () => {
  let component: SmartremComponent;
  let fixture: ComponentFixture<SmartremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartremComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
