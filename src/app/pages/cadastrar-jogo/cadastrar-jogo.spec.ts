import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarJogo } from './cadastrar-jogo';

describe('CadastrarJogo', () => {
  let component: CadastrarJogo;
  let fixture: ComponentFixture<CadastrarJogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarJogo],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarJogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
