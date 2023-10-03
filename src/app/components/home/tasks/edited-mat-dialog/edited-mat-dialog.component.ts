import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'edited-mat-dialog',
  templateUrl: './edited-mat-dialog.component.html',
  styleUrls: ['./edited-mat-dialog.component.scss'],
})
export class EditedMatDialogComponent {
  constructor(
    // MatDialogRef for the Close button funcionality
    public dialogRef: MatDialogRef<EditedMatDialogComponent>
  ) {}
}
