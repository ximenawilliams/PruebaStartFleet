import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallRestPage } from './call-rest.page';

describe('CallRestPage', () => {
  let component: CallRestPage;
  let fixture: ComponentFixture<CallRestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallRestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallRestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
