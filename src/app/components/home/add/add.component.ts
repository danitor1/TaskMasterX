import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  calendar!: FormControl;
  calendarRange!: FormControl;
  hour!: FormControl;
  title!: FormControl;
  description!: FormControl;
  // To activate the notification that the message has been sent
  sent = false;
  // New Date() for the Time Picker
  mytime: Date = new Date();

  // ngOnInit()
  ngOnInit(): void {
    // Init the Form Control and Form Group, in this order
    this.FormControl();
    this.FormGroup();
  }

  // Show the form
  newTask() {
    return (this.task = true);
  }

  // Close the form
  closeTask() {
    return (this.task = false);
  }

  // Form
  FormControl() {
    this.calendar = new FormControl('', [Validators.required]);
    this.calendarRange = new FormControl('', [Validators.required]);
    this.hour = new FormControl('', [Validators.required]);
    this.title = new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(150),
      Validators.required,
    ]);
    this.description = new FormControl('', [
      Validators.minLength(5),
      Validators.maxLength(1000),
      Validators.required,
    ]);
  }

  FormGroup() {
    this.myForm = new FormGroup(
      {
        calendar: this.calendar,
        calendarRange: this.calendarRange,
        hour: this.hour,
        title: this.title,
        description: this.description,
      }
      // { updateOn: 'blur' }
    );
  }

  // Submit the info of the form
  onSubmit(
    calendar: any,
    calendarRange: any,
    hour: any,
    title: any,
    description: any
  ) {
    // Reset form
    this.myForm.reset();
    console.log('Message Submitted and Reseted!');
    // Change "sent" property to true for display notification
    this.sent = true;
  }
}
