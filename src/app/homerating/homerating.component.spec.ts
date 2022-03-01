import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeratingComponent } from './homerating.component';

describe('HomeratingComponent', () => {
  let component: HomeratingComponent;
  let fixture: ComponentFixture<HomeratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeratingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
