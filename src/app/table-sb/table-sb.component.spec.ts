import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSBComponent } from './table-sb.component';

describe('TableSBComponent', () => {
  let component: TableSBComponent;
  let fixture: ComponentFixture<TableSBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableSBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
