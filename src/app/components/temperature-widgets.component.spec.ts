import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureWidgetsComponent } from './temperature-widgets.component';

describe('TemperatureWidgetsComponent', () => {
  let component: TemperatureWidgetsComponent;
  let fixture: ComponentFixture<TemperatureWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
