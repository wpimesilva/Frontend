import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarDadosContatoComponent } from './atualizar-dados-contato.component';

describe('AtualizarDadosContatoComponent', () => {
  let component: AtualizarDadosContatoComponent;
  let fixture: ComponentFixture<AtualizarDadosContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarDadosContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarDadosContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
