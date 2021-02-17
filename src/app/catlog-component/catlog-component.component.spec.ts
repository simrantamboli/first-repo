import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatlogComponentComponent } from './catlog-component.component';

describe('CatlogComponentComponent', () => {
  let component: CatlogComponentComponent;
  let fixture: ComponentFixture<CatlogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatlogComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatlogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
