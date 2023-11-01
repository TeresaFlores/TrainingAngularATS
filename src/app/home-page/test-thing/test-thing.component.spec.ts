import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestThingComponent } from './test-thing.component';

describe('TestThingComponent', () => {
  let component: TestThingComponent;
  let fixture: ComponentFixture<TestThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestThingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
