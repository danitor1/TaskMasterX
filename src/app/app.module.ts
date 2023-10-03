import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing Module
import { AppRoutingModule } from './app-routing.module';
// Browser Animations Module from Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Slide Toggle from Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// MatIcon Module from Angular Material
import { MatIconModule } from '@angular/material/icon';
// Forms Module
import { FormsModule } from '@angular/forms';
// Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { AddComponent } from './components/home/add/add.component';
import { TasksComponent } from './components/home/tasks/tasks.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { EditMatDialogComponent } from './components/home/tasks/edit-mat-dialog/edit-mat-dialog.component';
import { DeleteMatDialogComponent } from './components/home/tasks/delete-mat-dialog/delete-mat-dialog.component';

// Angular Material Components:
// Form
import { MatFormFieldModule } from '@angular/material/form-field';
// Input
import { MatInputModule } from '@angular/material/input';
// Select
import { MatSelectModule } from '@angular/material/select';
// Date Picker and Native Date (Both for Calendar)
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// Tooltip
import { MatTooltipModule } from '@angular/material/tooltip';
// Dialog
import { MatDialogModule } from '@angular/material/dialog';

// Angular Material CDK:
// Drag & Drop
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AddComponent,
    TasksComponent,
    FooterComponent,
    EditMatDialogComponent,
    DeleteMatDialogComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
