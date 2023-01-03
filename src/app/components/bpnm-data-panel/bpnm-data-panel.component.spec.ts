import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpnmDataPanelComponent } from './bpnm-data-panel.component';

describe('BpnmDataPanelComponent', () => {
  let component: BpnmDataPanelComponent;
  let fixture: ComponentFixture<BpnmDataPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpnmDataPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpnmDataPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
