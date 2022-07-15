import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarContratosComponent } from './selecionar-contratos.component';

describe('SelecionarContratosComponent', () => {
  let component: SelecionarContratosComponent;
  let fixture: ComponentFixture<SelecionarContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarContratosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecionarContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
