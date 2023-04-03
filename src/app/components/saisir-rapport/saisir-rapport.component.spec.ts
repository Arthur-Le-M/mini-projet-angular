import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirRapportComponent } from './saisir-rapport.component';

describe('SaisirRapportComponent', () => {
  let component: SaisirRapportComponent;
  let fixture: ComponentFixture<SaisirRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisirRapportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaisirRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
