import { AppModule } from '../';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddToggleModalComponent } from './add-toggle-modal.component';

describe('AddToggleModalComponent', () => {
  let component: AddToggleModalComponent;
  let fixture: ComponentFixture<AddToggleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AddToggleModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
