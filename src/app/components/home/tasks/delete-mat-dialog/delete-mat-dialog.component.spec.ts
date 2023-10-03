import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMatDialogComponent } from './delete-mat-dialog.component';

describe('MatDialogComponent', () => {
  let component: DeleteMatDialogComponent;
  let fixture: ComponentFixture<DeleteMatDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteMatDialogComponent],
    });
    fixture = TestBed.createComponent(DeleteMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
