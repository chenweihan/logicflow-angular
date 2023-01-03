import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmnComponent } from './bpmn.component';

describe('BpmnComponent', () => {
  let component: BpmnComponent;
  let fixture: ComponentFixture<BpmnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpmnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
