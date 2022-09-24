import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWearablesComponent } from './smart-wearables.component';

describe('SmartWearablesComponent', () => {
  let component: SmartWearablesComponent;
  let fixture: ComponentFixture<SmartWearablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartWearablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartWearablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
