import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'added-mat-dialog',
  templateUrl: './added-mat-dialog.component.html',
  styleUrls: ['./added-mat-dialog.component.scss'],
})
export class AddedMatDialogComponent {
  constructor(
    // MatDialogRef for the Close button funcionality
    public dialogRef: MatDialogRef<AddedMatDialogComponent>
  ) {}
}
