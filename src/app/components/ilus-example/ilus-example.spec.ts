import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlusExample } from './ilus-example';

describe('IlusExample', () => {
  let component: IlusExample;
  let fixture: ComponentFixture<IlusExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlusExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlusExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
