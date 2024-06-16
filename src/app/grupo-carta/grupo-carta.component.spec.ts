import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoCartaComponent } from './grupo-carta.component';

describe('GrupoCartaComponent', () => {
  let component: GrupoCartaComponent;
  let fixture: ComponentFixture<GrupoCartaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrupoCartaComponent]
    });
    fixture = TestBed.createComponent(GrupoCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
