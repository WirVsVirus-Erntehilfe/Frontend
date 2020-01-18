import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ReactiveFormsModule } from '@angular/forms'

import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
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