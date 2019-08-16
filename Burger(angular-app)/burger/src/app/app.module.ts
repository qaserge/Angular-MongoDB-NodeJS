import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

const appRoutes: Routes = [
  {path:'',component:IngredientsComponent},
  {path:'page2',component:Page2Component},
  {path:'page3',component:Page3Component}
]

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
