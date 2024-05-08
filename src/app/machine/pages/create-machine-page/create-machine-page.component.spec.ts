import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMachinePageComponent } from './create-machine-page.component';

describe('CreateMachinePageComponent', () => {
  let component: CreateMachinePageComponent;
  let fixture: ComponentFixture<CreateMachinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMachinePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateMachinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
