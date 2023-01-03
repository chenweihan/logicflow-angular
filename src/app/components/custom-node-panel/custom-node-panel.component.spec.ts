import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNodePanelComponent } from './custom-node-panel.component';

describe('CustomNodePanelComponent', () => {
  let component: CustomNodePanelComponent;
  let fixture: ComponentFixture<CustomNodePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNodePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomNodePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
