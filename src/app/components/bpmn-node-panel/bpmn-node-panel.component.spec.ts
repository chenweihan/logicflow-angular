import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmnNodePanelComponent } from './bpmn-node-panel.component';

describe('BpmnNodePanelComponent', () => {
  let component: BpmnNodePanelComponent;
  let fixture: ComponentFixture<BpmnNodePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpmnNodePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpmnNodePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
