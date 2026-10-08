import {
    ChangeDetectionStrategy,
    Component,
    type DebugElement,
    signal,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideTaiga, TUI_ANIMATIONS_SPEED} from '@taiga-ui/core';
import {TUI_TREE_LEVEL, TuiTree, TuiTreeItem} from '@taiga-ui/kit';

interface Item {
    readonly text: string;
    readonly children?: readonly Item[];
}

describe('Tree', () => {
    @Component({
        imports: [TuiTree],
        template: `
            @if (useMap()) {
                <tui-tree
                    [childrenHandler]="handler"
                    [content]="content"
                    [map]="map()"
                    [trackBy]="trackBy"
                    [tuiTreeController]="fallback()"
                    [value]="data()"
                />
            } @else {
                <tui-tree
                    [childrenHandler]="handler"
                    [content]="content"
                    [trackBy]="trackBy"
                    [tuiTreeController]="fallback()"
                    [value]="data()"
                />
            }
            <ng-template
                #content
                let-item
            >
                <span [attr.data-name]="item.text">{{ item.text }}</span>
            </ng-template>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly fallback = signal(false);
        public readonly useMap = signal(false);
        public readonly map = signal(new Map<Item, boolean>());
        public readonly data = signal<Item>({
            text: 'Root',
            children: [{text: 'Branch', children: [{text: 'Leaf'}]}, {text: 'Sibling'}],
        });

        public readonly handler = (item: Item): readonly Item[] => item.children || [];
        public readonly trackBy = (_: number, item: Item): string => item.text;
    }

    let fixture: ComponentFixture<Test>;

    function getItems(): DebugElement[] {
        return fixture.debugElement.queryAll(By.directive(TuiTreeItem));
    }

    function getItem(text: string, index = 0): DebugElement {
        return getItems().filter(
            (item) =>
                item.nativeElement.querySelector('[data-name]')?.textContent === text,
        )[index]!;
    }

    function toggle(text: string, index = 0): void {
        const button = getItem(text, index).query(By.css('button'))
            .nativeElement as HTMLButtonElement;

        button.click();
        fixture.detectChanges();
    }

    function finishTransition(text: string, propertyName = 'grid-template-rows'): void {
        const expand = getItem(text).query(By.css('tui-expand'));

        expand.triggerEventHandler('transitionend.self', {propertyName});
        fixture.detectChanges();
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        fixture.detectChanges();
    });

    it('does not create descendants of a collapsed node', () => {
        expect(getItems()).toHaveLength(1);
        expect(fixture.nativeElement.textContent).toContain('Root');
        expect(fixture.nativeElement.textContent).not.toContain('Branch');
        expect(fixture.nativeElement.querySelector('button')).not.toBeNull();
    });

    it('creates only the next level when a node is expanded', () => {
        toggle('Root');

        expect(getItems()).toHaveLength(3);
        expect(fixture.nativeElement.textContent).toContain('Branch');
        expect(fixture.nativeElement.textContent).not.toContain('Leaf');
        expect(getItem('Branch').injector.get(TUI_TREE_LEVEL)).toBe(1);
        expect(getItem('Sibling').query(By.css('button'))).toBeNull();
    });

    it('keeps the branch until the collapse animation finishes', () => {
        toggle('Root');
        finishTransition('Root');
        toggle('Root');

        expect(getItems()).toHaveLength(3);

        finishTransition('Root', 'opacity');

        expect(getItems()).toHaveLength(3);

        finishTransition('Root');

        expect(getItems()).toHaveLength(1);
    });

    it('restores nested expansion after the ancestor is destroyed and recreated', () => {
        toggle('Root');
        finishTransition('Root');
        toggle('Branch');
        finishTransition('Branch');

        const branch = getItem('Branch').injector.get(TuiTreeItem);

        expect(getItems()).toHaveLength(4);

        toggle('Root');
        finishTransition('Root');

        expect(getItems()).toHaveLength(1);

        toggle('Root');

        expect(getItem('Branch').injector.get(TuiTreeItem).expanded()).toBe(true);
        expect(getItems()).toHaveLength(4);
        expect(getItem('Branch').injector.get(TuiTreeItem)).not.toBe(branch);
        expect(getItem('Leaf').injector.get(TUI_TREE_LEVEL)).toBe(2);
    });

    it('keeps a nested node collapsed after recreating its ancestor', () => {
        toggle('Root');
        finishTransition('Root');
        toggle('Branch');
        finishTransition('Branch');
        toggle('Branch');
        finishTransition('Branch');
        toggle('Root');
        finishTransition('Root');
        toggle('Root');

        expect(getItems()).toHaveLength(3);
        expect(getItem('Branch').injector.get(TuiTreeItem).isExpanded).toBe(false);
    });

    it('keeps identical values in different parent branches independent', () => {
        const shared: Item = {text: 'Shared', children: [{text: 'Leaf'}]};

        fixture.componentInstance.data.set({
            text: 'Root',
            children: [
                {text: 'First', children: [shared]},
                {text: 'Second', children: [shared]},
            ],
        });
        fixture.detectChanges();

        toggle('Root');
        finishTransition('Root');
        toggle('First');
        toggle('Second');
        toggle('Shared');
        toggle('Root');
        finishTransition('Root');
        toggle('Root');

        expect(getItem('Shared').injector.get(TuiTreeItem).isExpanded).toBe(true);
        expect(getItem('Shared', 1).injector.get(TuiTreeItem).isExpanded).toBe(false);
        expect(getItems()).toHaveLength(6);
    });

    it('updates the expandability when children are added and removed', () => {
        fixture.componentInstance.data.set({text: 'Root'});
        fixture.detectChanges();

        expect(getItem('Root').injector.get(TuiTreeItem).isExpandable).toBe(false);
        expect(getItem('Root').query(By.css('button'))).toBeNull();

        fixture.componentInstance.data.set({
            text: 'Root',
            children: [{text: 'New child'}],
        });
        fixture.detectChanges();

        expect(getItem('Root').injector.get(TuiTreeItem).isExpandable).toBe(true);

        toggle('Root');

        expect(getItems()).toHaveLength(2);

        fixture.componentInstance.data.set({text: 'Root'});
        fixture.detectChanges();

        expect(getItems()).toHaveLength(1);
        expect(getItem('Root').injector.get(TuiTreeItem).isExpandable).toBe(false);
    });

    it('respects an initially expanded external map', () => {
        const data = fixture.componentInstance.data();

        fixture.componentInstance.useMap.set(true);
        fixture.componentInstance.map.set(new Map([[data, true]]));
        fixture.detectChanges();

        expect(getItems()).toHaveLength(3);
        expect(getItem('Root').injector.get(TuiTreeItem).expanded()).toBe(true);
        expect(getItem('Branch').injector.get(TuiTreeItem).expanded()).toBe(false);
    });

    it('restores descendants controlled by an external map', () => {
        fixture.componentInstance.useMap.set(true);
        fixture.detectChanges();

        toggle('Root');
        finishTransition('Root');
        toggle('Branch');
        toggle('Root');
        finishTransition('Root');

        expect(getItems()).toHaveLength(1);

        toggle('Root');

        expect(getItems()).toHaveLength(4);
        expect(getItem('Branch').injector.get(TuiTreeItem).expanded()).toBe(true);
    });

    it('renders initially expanded descendants', () => {
        fixture.componentInstance.fallback.set(true);
        fixture.detectChanges();

        expect(getItems()).toHaveLength(4);
    });

    it('preserves component identity and expansion with a custom trackBy', () => {
        toggle('Root');
        toggle('Branch');

        const branch = getItem('Branch').injector.get(TuiTreeItem);

        fixture.componentInstance.data.set({
            text: 'Root',
            children: [
                {text: 'Sibling'},
                {text: 'Branch', children: [{text: 'New leaf'}]},
            ],
        });
        fixture.detectChanges();

        expect(getItem('Branch').injector.get(TuiTreeItem)).toBe(branch);
        expect(branch.expanded()).toBe(true);
        expect(fixture.nativeElement.textContent).toContain('New leaf');
    });

    it('removes descendants without waiting for a transition when animations are disabled', async () => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga(), {provide: TUI_ANIMATIONS_SPEED, useValue: 0}],
        });
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        fixture.componentInstance.fallback.set(true);
        fixture.detectChanges();

        expect(getItems()).toHaveLength(4);

        toggle('Root');

        expect(getItems()).toHaveLength(1);
    });

    it('keeps manually declared tree items expandable', async () => {
        @Component({
            imports: [TuiTree],
            template: `
                <div [tuiTreeController]="false">
                    <tui-tree-item>
                        Root
                        <tui-tree-item>Leaf</tui-tree-item>
                    </tui-tree-item>
                </div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class ManualTest {}

        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            imports: [ManualTest],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();

        const manual = TestBed.createComponent(ManualTest);

        manual.detectChanges();

        const items = manual.debugElement.queryAll(By.directive(TuiTreeItem));

        expect(items).toHaveLength(2);
        expect(items[0]!.injector.get(TuiTreeItem).isExpandable).toBe(true);
        expect(items[1]!.injector.get(TuiTreeItem).isExpandable).toBe(false);

        items[0]!.query(By.css('button')).nativeElement.click();
        manual.detectChanges();

        expect(items[0]!.injector.get(TuiTreeItem).expanded()).toBe(true);
    });

    it('restores expansion for primitive values including zero', async () => {
        @Component({
            imports: [TuiTree],
            template: `
                <tui-tree
                    [childrenHandler]="handler"
                    [tuiTreeController]="false"
                    [value]="0"
                />
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class PrimitiveTest {
            public readonly handler = (item: number): readonly number[] =>
                item < 2 ? [item + 1] : [];
        }

        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            imports: [PrimitiveTest],
            providers: [provideTaiga(), {provide: TUI_ANIMATIONS_SPEED, useValue: 0}],
        });
        await TestBed.compileComponents();

        const primitive = TestBed.createComponent(PrimitiveTest);

        primitive.detectChanges();
        primitive.debugElement.query(By.css('button')).nativeElement.click();
        primitive.detectChanges();
        primitive.debugElement.queryAll(By.css('button'))[1]!.nativeElement.click();
        primitive.detectChanges();

        expect(primitive.debugElement.queryAll(By.directive(TuiTreeItem))).toHaveLength(
            3,
        );

        primitive.debugElement.query(By.css('button')).nativeElement.click();
        primitive.detectChanges();

        expect(primitive.debugElement.queryAll(By.directive(TuiTreeItem))).toHaveLength(
            1,
        );

        primitive.debugElement.query(By.css('button')).nativeElement.click();
        primitive.detectChanges();

        expect(primitive.debugElement.queryAll(By.directive(TuiTreeItem))).toHaveLength(
            3,
        );
    });

    it('creates one component for a collapsed tree with 3000 nodes', () => {
        const items = Array.from({length: 3000}, (_, index) => ({
            text: `Node ${index}`,
            children: [] as Item[],
        }));

        items.slice(1).forEach((item, index) => {
            items[Math.floor(index / 30)]!.children.push(item);
        });

        fixture.componentInstance.data.set(items[0]!);
        fixture.detectChanges();

        expect(getItems()).toHaveLength(1);

        toggle('Node 0');

        expect(getItems()).toHaveLength(31);
    });
});
