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

    it('should be able to expand tree after clearing and re-adding children', async () => {
        // Wait for initial render to complete
        await fixture.whenStable();
        
        // Initial state - should be expandable
        const treeItems = fixture.debugElement.queryAll(By.css('tui-tree-item'));

        expect(treeItems.length).toBeGreaterThan(0);

        const rootItem = treeItems[0]!;

        // Wait for content children to be initialized
        await fixture.whenStable();
        
        expect(rootItem.componentInstance.isExpandable).toBe(true);

        // Clear children
        component.removeChildrens();
        fixture.detectChanges();
        await fixture.whenStable();
        
        // Force additional detection cycles to ensure DOM is updated
        fixture.detectChanges();
        await fixture.whenStable();

        // Should not be expandable when no children
        expect(rootItem.componentInstance.isExpandable).toBe(false);

        // Re-add children
        component.addChildrens();
        fixture.detectChanges();
        await fixture.whenStable();
        
        // Force additional detection cycles
        fixture.detectChanges();
        await fixture.whenStable();

        // This should be true after the fix
        expect(rootItem.componentInstance.isExpandable).toBe(true);

        // Try to toggle expansion - this is where the bug might manifest
        if (rootItem.componentInstance.isExpandable) {
            const controller = fixture.debugElement
                .query(By.css('[tuiTreeController]'))
                ?.componentInstance;

            if (controller) {
                controller.toggle(rootItem.componentInstance);
                fixture.detectChanges();
                await fixture.whenStable();

                // Should be expanded now
                expect(rootItem.componentInstance.isExpanded).toBe(true);
            }
        }
    });
});