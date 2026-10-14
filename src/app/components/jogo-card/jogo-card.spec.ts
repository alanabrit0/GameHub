import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JogoCard } from './jogo-card';

describe('JogoCard', () => {
  let component: JogoCard;
  let fixture: ComponentFixture<JogoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(JogoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
