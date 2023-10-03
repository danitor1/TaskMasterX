import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedMatDialogComponent } from './added-mat-dialog.component';

describe('MatDialogComponent', () => {
  let component: AddedMatDialogComponent;
  let fixture: ComponentFixture<AddedMatDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedMatDialogComponent],
    });
    fixture = TestBed.createComponent(AddedMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
