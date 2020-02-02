import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstaticoStartFleetPage } from './estatico-start-fleet.page';

describe('EstaticoStartFleetPage', () => {
  let component: EstaticoStartFleetPage;
  let fixture: ComponentFixture<EstaticoStartFleetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstaticoStartFleetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstaticoStartFleetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
