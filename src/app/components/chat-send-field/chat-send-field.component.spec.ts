import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSendFieldComponent } from './chat-send-field.component';

describe('ChatSendFieldComponent', () => {
  let component: ChatSendFieldComponent;
  let fixture: ComponentFixture<ChatSendFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSendFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSendFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
