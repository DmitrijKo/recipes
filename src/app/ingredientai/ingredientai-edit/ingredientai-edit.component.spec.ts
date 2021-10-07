import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientaiEditComponent } from './ingredientai-edit.component';

describe('IngredientaiEditComponent', () => {
  let component: IngredientaiEditComponent;
  let fixture: ComponentFixture<IngredientaiEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientaiEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientaiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
