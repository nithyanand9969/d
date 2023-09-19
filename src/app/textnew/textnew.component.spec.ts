import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextnewComponent } from './textnew.component';

describe('TextnewComponent', () => {
  let component: TextnewComponent;
  let fixture: ComponentFixture<TextnewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextnewComponent]
    });
    fixture = TestBed.createComponent(TextnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
