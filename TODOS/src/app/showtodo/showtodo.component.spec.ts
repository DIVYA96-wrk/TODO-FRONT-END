import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtodoComponent } from './showtodo.component';

describe('ShowtodoComponent', () => {
  let component: ShowtodoComponent;
  let fixture: ComponentFixture<ShowtodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
