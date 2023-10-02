import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogComponent } from './mat-dialog.component';

describe('MatDialogComponent', () => {
  let component: MatDialogComponent;
  let fixture: ComponentFixture<MatDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatDialogComponent]
    });
    fixture = TestBed.createComponent(MatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
