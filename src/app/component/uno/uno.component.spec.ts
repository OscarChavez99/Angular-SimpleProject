import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnoComponent } from './uno.component';

describe('UnoComponent', () => {
  let component: UnoComponent;
  let fixture: ComponentFixture<UnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnoComponent]
    });
    fixture = TestBed.createComponent(UnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
