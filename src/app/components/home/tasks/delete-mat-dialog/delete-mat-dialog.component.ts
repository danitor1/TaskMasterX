import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { taskObject } from 'src/app/interface/taskObject';

@Component({
  selector: 'delete-mat-dialog',
  templateUrl: './delete-mat-dialog.component.html',
  styleUrls: ['./delete-mat-dialog.component.scss'],
})
export class DeleteMatDialogComponent {
  taskToDelete!: taskObject;

  constructor(
    // MatDialogRef for the Close button funcionality
    public dialogRef: MatDialogRef<DeleteMatDialogComponent>,
    // Inject MAT_DIALOG_DATA for bring the information
    @Inject(MAT_DIALOG_DATA)
    public data: { taskToDelete: taskObject }
  ) {
    this.taskToDelete = data.taskToDelete;
  }

  // Confirm the deletion and close dialog
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  // Close the dialog without delete
  onCancelClick(): void {
    this.dialogRef.close(false);
  }
}
