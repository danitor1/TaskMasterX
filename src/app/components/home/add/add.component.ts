import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { taskObject } from 'src/app/interfaces/taskObject';
import { SendTasksService } from 'src/app/services/send-tasks/send-tasks.service';
import { AddedMatDialogComponent } from './added-mat-dialog/added-mat-dialog.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  // Property to activate open or close the form
  task: boolean = false;
  // ForomGroup and FormControl properties
  myForm!: FormGroup;
  calendarStart!: FormControl;
  calendarEnd!: FormControl;
  hour!: FormControl;
  title!: FormControl;
  priority!: FormControl;
  description!: FormControl;
  // Information object for Send Tasks Service
  information!: taskObject;

  constructor(
    // Send Tasks Service
    private sendTasksService: SendTasksService,
    // Material Dialog
    private matDialog: MatDialog
  ) {}

  // NgOnInit
  ngOnInit(): void {
    // Init the Form Control and Form Group, in this order
    this.FormControl();
    this.FormGroup();
  }

  // New Task Button (open or close the form)
  newTask() {
    this.task = !this.task;
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
    this.myForm = new FormGroup(
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

  // Submit Form Button
  onSubmit(
    calendarStart: any,
    calendarEnd: any,
    hour: any,
    title: any,
    description: any,
    priority: string
  ) {
    this.information = {
      calendarStart,
      calendarEnd,
      hour,
      title,
      description,
      priority,
    };
    // Send information with Service to Tasks Component
    this.sendTasksService.emitEvent(this.information);
    // Close the form
    this.task = false;
    // Reset form (to ensure)
    this.myForm.reset();
    // Open dialog
    const addedDialog = this.matDialog.open(AddedMatDialogComponent, {});
    // Set Timeout 1.5s
    setTimeout(() => {
      addedDialog.close();
    }, 1500);
  }

  // Close form Button
  closeForm() {
    this.task = false;
  }
}
