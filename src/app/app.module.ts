import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './MaterialModules';
import { FavoriteComponent } from './favorite/favorite.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './custom-directives/input-format.directive';

@NgModule({
  declarations: [	
    AppComponent,
    FavoriteComponent,
    NavbarComponent,
    DataTableComponent,
    LikeComponent,
      InputFormatDirective
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
