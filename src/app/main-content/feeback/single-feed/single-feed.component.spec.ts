import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFeedComponent } from './single-feed.component';

describe('SingleFeedComponent', () => {
  let component: SingleFeedComponent;
  let fixture: ComponentFixture<SingleFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
