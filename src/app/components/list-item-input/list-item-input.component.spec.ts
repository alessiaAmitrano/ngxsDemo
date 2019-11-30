import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemInputComponent } from './list-item-input.component';

describe('ListItemInputComponent', () => {
  let component: ListItemInputComponent;
  let fixture: ComponentFixture<ListItemInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
