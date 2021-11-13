import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimenumberchartComponent } from './primenumberchart.component';

describe('PrimenumberchartComponent', () => {
  let component: PrimenumberchartComponent;
  let fixture: ComponentFixture<PrimenumberchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimenumberchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimenumberchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
