import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelMenuComponent } from './side-panel-menu.component';

describe('SidePanelMenuComponent', () => {
  let component: SidePanelMenuComponent;
  let fixture: ComponentFixture<SidePanelMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePanelMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidePanelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
