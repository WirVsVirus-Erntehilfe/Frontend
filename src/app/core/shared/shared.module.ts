import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ReactiveFormsModule } from '@angular/forms'

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

const materialModules = [
  MatInputModule,
  MatCardModule,
  MatChipsModule,
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatDividerModule,
  MatBadgeModule,
  MatListModule,
  MatExpansionModule,
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    materialModules,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }