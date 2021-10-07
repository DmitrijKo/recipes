import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngridientaiComponent } from './ingridientai.component';

describe('IngridientaiComponent', () => {
  let component: IngridientaiComponent;
  let fixture: ComponentFixture<IngridientaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngridientaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngridientaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
