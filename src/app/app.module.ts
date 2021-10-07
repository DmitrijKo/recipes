import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReceptaiComponent } from './receptai/receptai.component';
import { AprasymasComponent } from './aprasymas/aprasymas.component';
import { RouterModule, Routes } from '@angular/router';
import { IngridientaiComponent } from './ingredientai/ingridientai.component';
import { IngredientaiEditComponent } from './ingredientai/ingredientai-edit/ingredientai-edit.component';

const appRoutes: Routes = [
   {path: "", component: ReceptaiComponent},
   {path: "aprasymas/:id", component: AprasymasComponent},
   {path: "aprasymas/:id/edit", component: IngredientaiEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ReceptaiComponent,
    AprasymasComponent,
    IngridientaiComponent,
    IngredientaiEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
