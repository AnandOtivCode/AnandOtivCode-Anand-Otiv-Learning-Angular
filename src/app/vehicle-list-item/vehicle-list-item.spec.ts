import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListItem } from './vehicle-list-item';

describe('VehicleListItem', () => {
  let component: VehicleListItem;
  let fixture: ComponentFixture<VehicleListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
