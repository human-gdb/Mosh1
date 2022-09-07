import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
    exports: [
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatToolbarModule,
        MatTableModule,
        MatCommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatSlideToggleModule,
    ]
  })
  export class AppMaterialModule { }
