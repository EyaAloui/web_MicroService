import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcComponent } from './crudc.component';

describe('CrudcComponent', () => {
  let component: CrudcComponent;
  let fixture: ComponentFixture<CrudcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
