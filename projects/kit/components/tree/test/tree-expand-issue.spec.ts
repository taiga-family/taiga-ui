import type {DebugElement} from '@angular/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

import {TuiTree} from '../tree';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly text: string;
}

describe('Tree expansion after clearing children issue', () => {
    @Component({
        standalone: true,
        imports: [TuiRoot, TuiTree],
        template: `
            <tui-root>
                <tui-tree
                    [childrenHandler]="handler"
                    [tuiTreeController]="true"
                    [value]="data"
                />
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestComponent {
        public data: TreeNode = {
            text: 'Root',
            children: [
                {
                    text: 'Child 1',
                    children: [
                        {text: 'Grandchild 1'},
                        {text: 'Grandchild 2'},
                    ],
                },
                {text: 'Child 2'},
            ],
        };

        public removeChildrens(): void {
            this.data = {...this.data, children: []};
        }

        public addChildrens(): void {
            this.data = {
                ...this.data,
                children: [
                    {
                        text: 'Child 1',
                        children: [
                            {text: 'Grandchild 1'},
                            {text: 'Grandchild 2'},
                        ],
                    },
                    {text: 'Child 2'},
                ],
            };
        }

        protected readonly handler = (item: TreeNode): readonly TreeNode[] =>
            item.children || [];
    }

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should handle tree expandability correctly when children are dynamically changed', async () => {
        // Wait for initial render to complete
        await fixture.whenStable();
        
        // Initial state - should be expandable
        const treeItems = fixture.debugElement.queryAll(By.css('tui-tree-item'));
        expect(treeItems.length).toBeGreaterThan(0);
        const rootItem = treeItems[0]!;

        // Initially should be expandable
        expect(rootItem.componentInstance.isExpandable).toBe(true);

        // Clear children
        component.removeChildrens();
        fixture.detectChanges();
        await fixture.whenStable();
        
        // Force additional detection cycles to ensure DOM is updated
        fixture.detectChanges();
        await fixture.whenStable();

        // After clearing children, should not be expandable  
        // Note: Due to QueryList timing, this might need multiple checks
        let isExpandableAfterClear = rootItem.componentInstance.isExpandable;
        if (isExpandableAfterClear) {
            // Give more time for QueryList to update
            fixture.detectChanges();
            await fixture.whenStable();
            isExpandableAfterClear = rootItem.componentInstance.isExpandable;
        }
        
        // This verifies our fix - without it, this would always be true
        expect(isExpandableAfterClear).toBe(false);

        // Re-add children
        component.addChildrens();
        fixture.detectChanges();
        await fixture.whenStable();

        // Should be expandable again
        expect(rootItem.componentInstance.isExpandable).toBe(true);

        // Should be able to expand/collapse
        const controller = fixture.debugElement.query(By.css('[tuiTreeController]'))?.componentInstance;
        if (controller && rootItem.componentInstance.isExpandable) {
            const wasExpanded = rootItem.componentInstance.isExpanded;
            controller.toggle(rootItem.componentInstance);
            fixture.detectChanges();
            await fixture.whenStable();
            
            // State should have changed
            expect(rootItem.componentInstance.isExpanded).toBe(!wasExpanded);
        }
    });
});