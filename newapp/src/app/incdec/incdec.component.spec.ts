import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncdecComponent } from './incdec.component';

describe('IncdecComponent', () => {
  let component: IncdecComponent;
  let fixture: ComponentFixture<IncdecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncdecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
