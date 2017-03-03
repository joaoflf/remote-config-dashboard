import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPropertiesComponent } from './config-properties.component';

describe('ConfigPropertiesComponent', () => {
  let component: ConfigPropertiesComponent;
  let fixture: ComponentFixture<ConfigPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
