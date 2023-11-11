import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCltComponent } from './ajout-clt.component';

describe('AjoutCltComponent', () => {
  let component: AjoutCltComponent;
  let fixture: ComponentFixture<AjoutCltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutCltComponent]
    });
    fixture = TestBed.createComponent(AjoutCltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
