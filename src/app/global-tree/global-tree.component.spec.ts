import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTreeComponent } from './global-tree.component';

describe('GlobalTreeComponent', () => {
  let component: GlobalTreeComponent;
  let fixture: ComponentFixture<GlobalTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
