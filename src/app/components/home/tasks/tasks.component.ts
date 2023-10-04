import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { SendTasksService } from '../../../services/send-tasks/send-tasks.service';
import { Component } from '@angular/core';
import { taskObject } from 'src/app/interface/taskObject';
import { MatDialog } from '@angular/material/dialog';
import { EditMatDialogComponent } from './edit-mat-dialog/edit-mat-dialog.component';
import { DeleteMatDialogComponent } from './delete-mat-dialog/delete-mat-dialog.component';
import { Subscription } from 'rxjs';
import { DeletedMatDialogComponent } from './deleted-mat-dialog/deleted-mat-dialog.component';
import { EditedMatDialogComponent } from './edited-mat-dialog/edited-mat-dialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  // Properties with taskObject[] interface for the lists
  toDo: taskObject[] = [];
  inProgress: taskObject[] = [];
  done: taskObject[] = [];
  // Information object for Send Tasks Service
  information!: taskObject;

  // Create a property for the subscription
  private eventSubscription!: Subscription;

  constructor(
    // Send Tasks Service
    private sendTasksService: SendTasksService,
    // Material Dialog
    private matDialog: MatDialog
  ) {}

  // NgOnInit
  ngOnInit() {
    // Subscribe to SendTasksService
    this.eventSubscription = this.sendTasksService
      .getEvent()
      .subscribe((information) => {
        // Push to "To Do" tasks
        this.toDo.push(information);
      });
    // 9 Tasks by default (using a custom interface) for testing the appication before adding tasks
    // To do
    this.toDo = [
      {
        title: 'Code Review',
        description: 'Description of Code Review.',
        priority: 'Urgent',
        calendarStart: 'Tue, Oct 10 2023',
        calendarEnd: 'Fri, Oct 11 2023',
        hour: '09:50',
        showDescription: false,
      },
      {
        title: 'Bug Fixing',
        description: 'Description of Bug Fixing.',
        priority: 'Important',
        calendarStart: 'Wed, Oct 11 2023',
        calendarEnd: 'Fri, Oct 13 2023',
        hour: '15:10',
        showDescription: false,
      },
      {
        title: 'Client Meetings',
        description: 'Description of Client Meetings.',
        priority: 'Not important',
        calendarStart: 'Thu, Oct 12 2023',
        calendarEnd: 'Fri, Oct 13 2023',
        hour: '13:30',
        showDescription: false,
      },
    ];
    // In progress
    this.inProgress = [
      {
        title: 'Database Design',
        description: 'Description of Database Design.',
        priority: 'Urgent',
        calendarStart: 'Sat, Oct 07 2023',
        calendarEnd: 'Mon, Oct 09 2023',
        hour: '11:20',
        showDescription: false,
      },
      {
        title: 'Project Planning',
        description: 'Description of Project Planning.',
        priority: 'Important',
        calendarStart: 'Sun, Oct 08 2023',
        calendarEnd: 'Tue, Oct 10 2023',
        hour: '16:30',
        showDescription: false,
      },
      {
        title: 'Software Testing',
        description: 'Description of Software Testing.',
        priority: 'Important',
        calendarStart: 'Mon, Oct 09 2023',
        calendarEnd: 'Wed, Oct 11 2023',
        hour: '10:10',
        showDescription: false,
      },
    ];
    // Done
    this.done = [
      {
        title: 'Documentation',
        description: 'Description of Documentation.',
        priority: 'Urgent',
        calendarStart: 'Wed, Sep 27 2023',
        calendarEnd: 'Fri, Sep 29 2023',
        hour: '09:40',
        showDescription: false,
      },
      {
        title: 'User Interface (UI) Design',
        description: 'Description of User Interface (UI) Design.',
        priority: 'Urgent',
        calendarStart: 'Thu, Sep 28 2023',
        calendarEnd: 'Fri, Sep 29 2023',
        hour: '12:30',
        showDescription: false,
      },
      {
        title: 'Version Control',
        description: 'Description of Version Control.',
        priority: 'Important',
        calendarStart: 'Fri, Sep 29 2023',
        calendarEnd: 'Sat, Sep 30 2023',
        hour: '13:10',
        showDescription: false,
      },
    ];
  }

  // Drop function of Angular CDK using the array of "taskObject[]"
  drop(event: CdkDragDrop<taskObject[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // Open or close description
  openOrCloseDescription(item: taskObject) {
    // Change to true or false
    item.showDescription = !item.showDescription;
  }

  // Edit functions:
  // Edit "to do" task
  editToDoTask(taskToEdit: taskObject, updatedTask: taskObject) {
    // Find the index of the task to edit in the "to do" array
    const index = this.toDo.indexOf(taskToEdit);
    // Check if the task is in the "to do" array
    if (index !== -1) {
      // Update the task with the new data
      this.toDo[index] = updatedTask;
    }
  }

  // Edit "in progress" task
  editInProgressTask(taskToEdit: taskObject, updatedTask: taskObject) {
    // Find the index of the task to edit in the "in progress" array
    const index = this.inProgress.indexOf(taskToEdit);
    // Check if the task is in the "in progress" array
    if (index !== -1) {
      // Update the task with the new data
      this.inProgress[index] = updatedTask;
    }
  }

  // Edit "done" task
  editDoneTask(taskToEdit: taskObject, updatedTask: taskObject) {
    // Find the index of the task to edit in the "done" array
    const index = this.done.indexOf(taskToEdit);
    // Check if the task is in the "done" array
    if (index !== -1) {
      // Update the task with the new data
      this.done[index] = updatedTask;
    }
  }

  // Edit Material Dialog and apply the changes if the user confirms
  editDialog(taskToEdit: taskObject): void {
    // Open dialog
    const dialogRef = this.matDialog.open(EditMatDialogComponent, {
      data: { taskToEdit },
    });
    // Suscribe to the user response
    dialogRef.afterClosed().subscribe((updatedTask: taskObject) => {
      if (updatedTask) {
        this.editToDoTask(taskToEdit, updatedTask);
        this.editInProgressTask(taskToEdit, updatedTask);
        this.editDoneTask(taskToEdit, updatedTask);
        // Open dialog of edited task
        const editedDialog = this.matDialog.open(EditedMatDialogComponent, {});
        // Set Timeout 1.5s
        setTimeout(() => {
          editedDialog.close();
        }, 1500);
      } else {
        this.matDialog.closeAll();
      }
    });
  }

  // Delete functions:
  // Delete "to do" task
  deleteToDoTask(taskToDelete: taskObject) {
    // Find the index of this object in "to do" array
    const index = this.toDo.indexOf(taskToDelete);
    // Check if the task is in the "to do" array
    if (index !== -1) {
      // "Splice" for delete
      this.toDo.splice(index, 1);
    }
  }

  // Delete "in progress" task
  deleteInProgressTask(taskToDelete: taskObject) {
    // Find the index of this object in "in progress" array
    const index = this.inProgress.indexOf(taskToDelete);
    // Check if the task is in the "in progress" array
    if (index !== -1) {
      // "Splice" for delete
      this.inProgress.splice(index, 1);
    }
  }

  // Delete "done" task
  deleteDoneTask(taskToDelete: taskObject) {
    // Find the index of this object in "done" array
    const index = this.done.indexOf(taskToDelete);
    // Check if the task is in the "done" array
    if (index !== -1) {
      // "Splice" for delete
      this.done.splice(index, 1);
    }
  }

  // Delete Material Dialog and apply the delete functions if the user confirms
  deleteDialog(taskToDelete: taskObject): void {
    // Open dialog
    const dialogRef = this.matDialog.open(DeleteMatDialogComponent, {
      // Pass the task you want to delete to the dialog
      data: { taskToDelete },
    });
    // Suscribe to the user response
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
        // The user confirmed the delete so call the 3 delete functions
        this.deleteToDoTask(taskToDelete);
        this.deleteInProgressTask(taskToDelete);
        this.deleteDoneTask(taskToDelete);
        // Open dialog of deleted task
        const deletedDialog = this.matDialog.open(
          DeletedMatDialogComponent,
          {}
        );
        // Set Timeout 1.5s
        setTimeout(() => {
          deletedDialog.close();
        }, 1500);
      } else {
        this.matDialog.closeAll();
      }
    });
  }

  // Unsubscribe when the component is destroyed
  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
