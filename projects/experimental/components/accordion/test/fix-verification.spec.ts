import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { TuiExpand } from '@taiga-ui/experimental/components/expand';

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
  selector: 'test-expand-without-tui-item',
  template: `
    <tui-expand [expanded]="expanded()">
      <test-child></test-child>
      <div>Regular content without tuiItem</div>
    </tui-expand>
  `,
  imports: [
    TuiExpand,
    TestChild,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestExpandWithoutTuiItem {
  public expanded = signal<boolean>(false);
}

@Component({
  standalone: true,
  selector: 'test-expand-with-tui-item',
  template: `
    <tui-expand [expanded]="expanded()">
      <ng-container *tuiItem>
        <test-child></test-child>
        <div>Content with tuiItem</div>
      </ng-container>
    </tui-expand>
  `,
  imports: [
    TuiExpand,
    TuiItem,
    TestChild,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestExpandWithTuiItem {
  public expanded = signal<boolean>(false);
}

describe('TuiExpand fix verification', () => {
  describe('Without TuiItem (content projection)', () => {
    let fixture: ComponentFixture<TestExpandWithoutTuiItem>;
    let component: TestExpandWithoutTuiItem;

    beforeEach(async () => {
      TestChild.constructorCallCount = 0;
      
      await TestBed.configureTestingModule({
        imports: [TestExpandWithoutTuiItem],
      }).compileComponents();

      fixture = TestBed.createComponent(TestExpandWithoutTuiItem);
      component = fixture.componentInstance;
    });

    it('should use content projection and render immediately', fakeAsync(() => {
      // Initial state - content should be projected immediately
      fixture.detectChanges();
      tick();
      
      const initialEl = fixture.nativeElement;
      
      // Child should be created immediately (no lazy loading without TuiItem)
      expect(TestChild.constructorCallCount).toBe(1);
      expect(initialEl.innerHTML).toContain('child-content');
      expect(initialEl.innerHTML).toContain('Regular content without tuiItem');
      
      // Expand - content should still be there
      component.expanded.set(true);
      fixture.detectChanges();
      tick();
      
      const expandedEl = fixture.nativeElement;
      
      // Should still be only one instance
      expect(TestChild.constructorCallCount).toBe(1);
    }));
  });

  describe('With TuiItem (template outlet)', () => {
    let fixture: ComponentFixture<TestExpandWithTuiItem>;
    let component: TestExpandWithTuiItem;

    beforeEach(async () => {
      TestChild.constructorCallCount = 0;
      
      await TestBed.configureTestingModule({
        imports: [TestExpandWithTuiItem],
      }).compileComponents();

      fixture = TestBed.createComponent(TestExpandWithTuiItem);
      component = fixture.componentInstance;
    });

    it('should use template outlet and render lazily', fakeAsync(() => {
      // Initial state - content should not be rendered (lazy loading)
      fixture.detectChanges();
      tick();
      
      const initialEl = fixture.nativeElement;
      
      // Child should NOT be created initially
      expect(TestChild.constructorCallCount).toBe(0);
      expect(initialEl.innerHTML).not.toContain('child-content');
      
      // Expand - content should be rendered
      component.expanded.set(true);
      fixture.detectChanges();
      tick();
      
      const expandedEl = fixture.nativeElement;
      
      // Child should be created exactly once
      expect(TestChild.constructorCallCount).toBe(1);
      expect(expandedEl.innerHTML).toContain('child-content');
      expect(expandedEl.innerHTML).toContain('Content with tuiItem');
    }));
  });
});