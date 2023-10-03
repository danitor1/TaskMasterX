import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'deleted-mat-dialog',
  templateUrl: './deleted-mat-dialog.component.html',
  styleUrls: ['./deleted-mat-dialog.component.scss'],
})
export class DeletedMatDialogComponent {
  constructor(
    // MatDialogRef for the Close button funcionality
    public dialogRef: MatDialogRef<DeletedMatDialogComponent>
  ) {}
}
