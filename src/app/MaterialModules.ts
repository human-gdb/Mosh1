import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    exports: [
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatToolbarModule,
        MatTableModule
    ]
  })
  export class AppMaterialModule { }
