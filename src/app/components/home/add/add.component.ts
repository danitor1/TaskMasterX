import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendTasksService } from 'src/app/services/sendTasks/send-tasks.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  // Property to activate show or hide the form
  task: boolean = false;
  // ForomGroup and FormControl properties
  myForm!: FormGroup;
  calendarStart!: FormControl;
  calendarEnd!: FormControl;
  hour!: FormControl;
  title!: FormControl;
  priority!: FormControl;
  description!: FormControl;
  // To activate the notification that the message has been sent
  sent = false;
  // New Date() for the Time Picker
  mytime: Date = new Date();

  constructor(private sendTasksService: SendTasksService) {}

  // ngOnInit()
  ngOnInit(): void {
    // Init the Form Control and Form Group, in this order
    this.FormControl();
    this.FormGroup();
  }

  // New Task Button (show or hide the form)
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

  // Submit the info of the form
  onSubmit(
    calendarStart: any,
    calendarEnd: any,
    hour: any,
    title: any,
    description: any,
    priority: string
  ) {
    // Sent information with Service to Tasks Component
    this.sendTasksService.emitEvent();

    console.log(calendarStart, calendarEnd, hour, title, description, priority);

    // Hide the form
    this.task = false;

    // Reset form
    this.myForm.reset();

    // Change "sent" property to true for display notification
    this.sent = true;
  }
}
