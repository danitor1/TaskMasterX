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

// Calendar Module from ngx-bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Drag & Drop from Angular CDK
import { DragDropModule } from '@angular/cdk/drag-drop';
// Material Tooltip from Angular CDK
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AddComponent,
    TasksComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    DragDropModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
