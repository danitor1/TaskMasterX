import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedMatDialogComponent } from './deleted-mat-dialog.component';

describe('MatDialogComponent', () => {
  let component: DeletedMatDialogComponent;
  let fixture: ComponentFixture<DeletedMatDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletedMatDialogComponent],
    });
    fixture = TestBed.createComponent(DeletedMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
