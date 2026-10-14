import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JogoDetalhes } from './jogo-detalhes';

describe('JogoDetalhes', () => {
  let component: JogoDetalhes;
  let fixture: ComponentFixture<JogoDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoDetalhes],
    }).compileComponents();

    fixture = TestBed.createComponent(JogoDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
