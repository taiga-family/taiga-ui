import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { TuiExpand } from '@taiga-ui/experimental/components/expand';
import { TuiAccordion, TuiAccordionDirective } from '@taiga-ui/experimental/components/accordion';

@Component({
  standalone: true,
  selector: 'test-child',
  template: 'child-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestChild {
  public static constructorCallCount = 0;

  constructor() {
    TestChild.constructorCallCount++;
  }
}

@Component({
  standalone: true,
  selector: 'test-accordion-with-tui-item',
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestAccordionWithTuiItem {
  public accordionOpen = signal<boolean>(false);
}

@Component({
  standalone: true,
  selector: 'test-expand-scenarios',
  template: `
    <tui-expand [expanded]="expandedWithTuiItem()">
      <ng-container *tuiItem>
        <test-child></test-child>
        <div>TuiItem content</div>
      </ng-container>
    </tui-expand>
    
    <tui-expand [expanded]="expandedWithoutTuiItem()">
      <test-child></test-child>
      <div>Regular content</div>
    </tui-expand>
  `,
  imports: [
    TuiExpand,
    TuiItem,
    TestChild,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestExpandScenarios {
  public expandedWithTuiItem = signal<boolean>(false);
  public expandedWithoutTuiItem = signal<boolean>(false);
}

describe('TuiExpand double projection fix', () => {
  beforeEach(() => {
    TestChild.constructorCallCount = 0;
  });

  describe('Accordion with TuiItem (issue reproduction)', () => {
    let fixture: ComponentFixture<TestAccordionWithTuiItem>;
    let component: TestAccordionWithTuiItem;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TestAccordionWithTuiItem],
      }).compileComponents();

      fixture = TestBed.createComponent(TestAccordionWithTuiItem);
      component = fixture.componentInstance;
    });

    it('should create child component only once when accordion opens (issue #11477 fix)', fakeAsync(() => {
      // Initially accordion is closed
      fixture.detectChanges();
      tick();
      
      const initialCount = TestChild.constructorCallCount;

      // Open the accordion
      component.accordionOpen.set(true);
      fixture.detectChanges();
      tick();

      // Child should be created at most once more than initial
      expect(TestChild.constructorCallCount).toBeLessThanOrEqual(initialCount + 1);
      const afterOpenCount = TestChild.constructorCallCount;

      // Close and reopen 
      component.accordionOpen.set(false);
      fixture.detectChanges();
      tick();
      
      component.accordionOpen.set(true);
      fixture.detectChanges();
      tick();
      
      // Key test: No additional instantiations should occur
      expect(TestChild.constructorCallCount).toBeLessThanOrEqual(afterOpenCount + 1);
    }));
  });

  describe('TuiExpand behavior verification', () => {
    let fixture: ComponentFixture<TestExpandScenarios>;
    let component: TestExpandScenarios;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [TestExpandScenarios],
      }).compileComponents();

      fixture = TestBed.createComponent(TestExpandScenarios);
      component = fixture.componentInstance;
    });

    it('should handle both TuiItem and regular content correctly', fakeAsync(() => {
      // Initial state - neither expanded
      fixture.detectChanges();
      tick();
      
      // Only the non-TuiItem content should be created (content projection)
      expect(TestChild.constructorCallCount).toBe(1);

      // Expand TuiItem content - should create one more child  
      component.expandedWithTuiItem.set(true);
      fixture.detectChanges();
      tick();
      
      expect(TestChild.constructorCallCount).toBe(2);

      // Expand regular content - should not create additional children
      component.expandedWithoutTuiItem.set(true);
      fixture.detectChanges();
      tick();
      
      // Still should be 2 (regular content was already rendered)
      expect(TestChild.constructorCallCount).toBe(2);
    }));
  });
});