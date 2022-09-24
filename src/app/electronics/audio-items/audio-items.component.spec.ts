import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioItemsComponent } from './audio-items.component';

describe('AudioItemsComponent', () => {
  let component: AudioItemsComponent;
  let fixture: ComponentFixture<AudioItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
