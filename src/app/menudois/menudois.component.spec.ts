import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudoisComponent } from './menudois.component';

describe('MenudoisComponent', () => {
  let component: MenudoisComponent;
  let fixture: ComponentFixture<MenudoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
