import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoQualificacaoComponent } from './grupo-qualificacao.component';

describe('GrupoQualificacaoComponent', () => {
  let component: GrupoQualificacaoComponent;
  let fixture: ComponentFixture<GrupoQualificacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrupoQualificacaoComponent]
    });
    fixture = TestBed.createComponent(GrupoQualificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
