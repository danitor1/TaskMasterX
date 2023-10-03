import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMatDialogComponent } from './edit-mat-dialog.component';

describe('MatDialogComponent', () => {
  let component: EditMatDialogComponent;
  let fixture: ComponentFixture<EditMatDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMatDialogComponent],
    });
    fixture = TestBed.createComponent(EditMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
