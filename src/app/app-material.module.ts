//materials
import {MatToolbarModule, MatSidenavModule, MatDividerModule,
    MatListModule, MatIconModule, MatButtonModule,MatSnackBarModule ,
    MatCardModule, MatFormFieldModule, MatSelectModule,  MatInputModule,
    MatDialogModule, MatExpansionModule,MatTooltipModule, MatProgressSpinnerModule,MatStepperModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
imports: [MatToolbarModule, MatSidenavModule, MatDividerModule, MatListModule, MatExpansionModule,MatProgressSpinnerModule,
          MatIconModule, MatButtonModule,MatCardModule,
         MatDialogModule,MatSnackBarModule,MatStepperModule,
          MatFormFieldModule, MatSelectModule, MatInputModule,MatTooltipModule],

exports: [MatToolbarModule, MatSidenavModule, MatDividerModule, MatListModule, MatIconModule, MatSnackBarModule,MatProgressSpinnerModule,MatStepperModule,
          MatButtonModule,MatCardModule,MatDialogModule,MatExpansionModule, 
          MatFormFieldModule, MatSelectModule, MatInputModule,MatTooltipModule]
})
export class AppMaterialModule{}