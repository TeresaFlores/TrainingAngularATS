import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunThingComponent } from './fun-thing.component';

describe('FunThingComponent', () => {
  let component: FunThingComponent;
  let fixture: ComponentFixture<FunThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunThingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
