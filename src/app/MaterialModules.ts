import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    exports: [
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatToolbarModule
    ]
  })
  export class AppMaterialModule { }
