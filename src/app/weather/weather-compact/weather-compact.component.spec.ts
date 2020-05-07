import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCompactComponent } from './weather-compact.component';

describe('WeatherCompactComponent', () => {
  let component: WeatherCompactComponent;
  let fixture: ComponentFixture<WeatherCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
