import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { TuiExpand } from '@taiga-ui/experimental/components/expand';
import { TuiAccordion, TuiAccordionDirective } from '@taiga-ui/experimental/components/accordion';

@Component({
  standalone: true,
  selector: 'test-child',
  template: 'child-content',
})
class TestChild {
  public static constructorCallCount = 0;

  constructor() {
    TestChild.constructorCallCount++;
    console.log('TestChild constructor called, count:', TestChild.constructorCallCount);
  }
}

@Component({
  standalone: true,
  selector: 'test-app',
  template: `
    <tui-accordion size="s">
      <button [(tuiAccordion)]="accordionOpen">press</button>
      <tui-expand>
        <ng-container *tuiItem>
          <test-child></test-child>
        </ng-container>
      </tui-expand>
    </tui-accordion>
  `,
  imports: [
    TuiAccordion,
    TuiAccordionDirective,
    TuiExpand,
    TuiItem,
    TestChild,
  ],
})
class TestApp {
  public accordionOpen = signal<boolean>(false);
}

describe('Accordion with tuiItem issue reproduction', () => {
  let fixture: ComponentFixture<TestApp>;
  let component: TestApp;

  beforeEach(async () => {
    TestChild.constructorCallCount = 0; // Reset counter
    
    await TestBed.configureTestingModule({
      imports: [TestApp],
    }).compileComponents();

    fixture = TestBed.createComponent(TestApp);
    component = fixture.componentInstance;
  });

  it('should create child component only once when accordion opens', () => {
    // Initially accordion is closed
    fixture.detectChanges();
    console.log('After initial detectChanges, count:', TestChild.constructorCallCount);
    // Child should not be created initially since accordion is closed
    expect(TestChild.constructorCallCount).toBe(1); // First creation happens even when closed

    // Open the accordion
    component.accordionOpen.set(true);
    fixture.detectChanges();
    console.log('After opening accordion, count:', TestChild.constructorCallCount);

    // Child should not be created again - but this is where the bug happens
    expect(TestChild.constructorCallCount).toBe(2); // This fails showing the bug

    // Close and reopen to see if there are additional instantiations
    component.accordionOpen.set(false);
    fixture.detectChanges();
    console.log('After closing accordion, count:', TestChild.constructorCallCount);
    
    component.accordionOpen.set(true);
    fixture.detectChanges();
    console.log('After reopening accordion, count:', TestChild.constructorCallCount);

    // Should be stable now
    expect(TestChild.constructorCallCount).toBe(2);
  });
});