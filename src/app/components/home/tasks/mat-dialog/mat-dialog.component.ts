import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss'],
})
export class MatDialogComponent {
  taskToDelete!: any;

  constructor(
    // MatDialogRef for the Close button funcionality
    public dialogRef: MatDialogRef<MatDialogComponent>,
    // Inject MAT_DIALOG_DATA for bring the information from Card Component
    @Inject(MAT_DIALOG_DATA)
    public data: { taskToDelete: any }
  ) {
    this.taskToDelete = data.taskToDelete;
  }

  // Close the dialog without deleting
  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  // Confirm the deletion and close dialog
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
