import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { taskObject } from 'src/app/interface/taskObject';

@Component({
  selector: 'edit-mat-dialog',
  templateUrl: './edit-mat-dialog.component.html',
  styleUrls: ['./edit-mat-dialog.component.scss'],
})
export class EditMatDialogComponent {
  // For edit like a form
  editForm: FormGroup;

  // Property to activate show or hide the form
  task: boolean = false;
  // ForomGroup and FormControl properties
  // The form name here is "editForm", declared in the constructor
  calendarStart!: FormControl;
  calendarEnd!: FormControl;
  hour!: FormControl;
  title!: FormControl;
  priority!: FormControl;
  description!: FormControl;

  constructor(
    // MatDialogRef for the Close button funcionality
    public dialogRef: MatDialogRef<EditMatDialogComponent>,
    // Inject MAT_DIALOG_DATA for bring the information
    @Inject(MAT_DIALOG_DATA)
    public data: { taskToEdit: taskObject },
    // Form Builder for edit like a form
    private formBuilder: FormBuilder
  ) {
    // Init the form in constructor for receive the inputs and be able to edit
    this.FormControl();
    this.FormGroup();
    // Asign each element for edit like a form
    this.editForm = this.formBuilder.group({
      title: data.taskToEdit.title,
      description: data.taskToEdit.description,
      priority: data.taskToEdit.priority,
      calendarStart: data.taskToEdit.calendarStart,
      calendarEnd: data.taskToEdit.calendarEnd,
      hour: data.taskToEdit.hour,
    });
  }

  // Form
  FormControl() {
    this.calendarStart = new FormControl('', [Validators.required]);
    this.calendarEnd = new FormControl('', [Validators.required]);
    this.hour = new FormControl('', [Validators.required]);
    this.title = new FormControl('', [
      Validators.maxLength(150),
      Validators.required,
    ]);
    this.description = new FormControl('', [
      Validators.maxLength(1000),
      Validators.required,
    ]);
    this.priority = new FormControl('', [Validators.required]);
  }

  FormGroup() {
    this.editForm = new FormGroup(
      {
        calendarStart: this.calendarStart,
        calendarEnd: this.calendarEnd,
        hour: this.hour,
        title: this.title,
        description: this.description,
        priority: this.priority,
      }
      // { updateOn: 'blur' }
    );
  }

  // Confirm the edit
  confirmEdit(): void {
    const updatedTask: taskObject = this.editForm.value;
    this.dialogRef.close(updatedTask);
  }

  // Close the dialog without edit
  cancelEdit(): void {
    this.dialogRef.close(false);
  }
}
