import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

let fixture: ComponentFixture<AboutComponent>;

describe('AboutComponent (highlightDirective)', () => {
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .createComponent(AboutComponent);
    fixture.detectChanges(); // initial binding
  });

  it('should change the btn backgroundColor', () => {
    var btn: HTMLElement = fixture.nativeElement.querySelector('btn');
    var bgColor = btn.style.backgroundColor;

    expect(bgColor).toBe('white');

    btn.click();
    bgColor = btn.style.backgroundColor;
    expect(bgColor).toBe('blue');

    btn.click();
    bgColor = btn.style.backgroundColor;
    expect(bgColor).toBe('red');

    btn.click();
    bgColor = btn.style.backgroundColor;
    expect(bgColor).toBe('blue');
  });
});