import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideTaiga} from '@taiga-ui/core';
import {tuiSwitchNgDevMode} from '@taiga-ui/jest-config';
import {TuiTabs, TuiTabsWithMore} from '@taiga-ui/kit';

describe('TabsWithMore | active tab across overflow boundary', () => {
    @Component({
        imports: [TuiTabs],
        template: `
            <tui-tabs-with-more
                [itemsLimit]="3"
                [(activeItemIndex)]="activeItemIndex"
            >
                @for (item of items(); track item) {
                    <button
                        *tuiItem
                        tuiTab
                        type="button"
                    >
                        {{ item }}
                    </button>
                }
            </tui-tabs-with-more>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly activeItemIndex = model(0);
        public readonly items = model(Array.from({length: 5}, (_, i) => `Item #${i}`));
    }

    let fixture: ComponentFixture<Test>;
    let emitted: number[];

    function getActiveTab(): string | undefined {
        const element: HTMLElement | null = fixture.nativeElement.querySelector(
            'tui-tabs [tuiTab]._active',
        );

        return element?.textContent?.trim();
    }

    async function settle(): Promise<void> {
        // Tabs are marked as active after render, then react to mutations
        for (let i = 0; i < 5; i++) {
            fixture.detectChanges();
            await fixture.whenStable();
        }
    }

    function reverse(): void {
        fixture.componentInstance.items.update((items) => [...items].reverse());
    }

    beforeEach(async () => {
        // fixture.detectChanges() only runs checkNoChanges (NG0100) in dev mode
        tuiSwitchNgDevMode(true);
        // jsdom has no layout: a wide host keeps the boundary defined by itemsLimit only
        jest.spyOn(Element.prototype, 'clientWidth', 'get').mockReturnValue(1000);

        TestBed.configureTestingModule({providers: [provideTaiga()]});

        fixture = TestBed.createComponent(Test);
        await settle();

        emitted = [];
        fixture.debugElement
            .query(By.directive(TuiTabsWithMore))
            .componentInstance.activeItemIndex.subscribe((index: number) =>
                emitted.push(index),
            );
    });

    afterEach(() => {
        jest.restoreAllMocks();
        tuiSwitchNgDevMode(false);
    });

    it('runs in dev mode', () => {
        expect(ngDevMode).toBeTruthy();
    });

    it('keeps active tab when reordered from overflow to visible part', async () => {
        fixture.componentInstance.activeItemIndex.set(4);
        await settle();

        expect(getActiveTab()).toBe('Item #4');

        reverse();
        await settle();

        expect(fixture.componentInstance.activeItemIndex()).toBe(0);
        expect(getActiveTab()).toBe('Item #4');
    });

    it('keeps active tab when reordered from visible to overflow part', async () => {
        expect(getActiveTab()).toBe('Item #0');

        reverse();
        await settle();

        expect(fixture.componentInstance.activeItemIndex()).toBe(4);
        expect(getActiveTab()).toBe('Item #0');
    });

    it('keeps active tab when reordered within visible part', async () => {
        fixture.componentInstance.activeItemIndex.set(1);
        await settle();

        fixture.componentInstance.items.set([
            'Item #1',
            'Item #0',
            'Item #2',
            'Item #3',
            'Item #4',
        ]);
        await settle();

        expect(fixture.componentInstance.activeItemIndex()).toBe(0);
        expect(getActiveTab()).toBe('Item #1');
    });

    it('keeps active tab when an item is added to the head', async () => {
        fixture.componentInstance.activeItemIndex.set(2);
        await settle();

        fixture.componentInstance.items.update((items) => ['New', ...items]);
        await settle();

        expect(fixture.componentInstance.activeItemIndex()).toBe(3);
        expect(getActiveTab()).toBe('Item #2');
    });

    it('keeps the index adjusted by parent when active item is removed', async () => {
        fixture.componentInstance.activeItemIndex.set(2);
        await settle();

        fixture.componentInstance.items.update((items) =>
            items.filter((item) => item !== 'Item #2'),
        );
        fixture.componentInstance.activeItemIndex.set(1);
        await settle();

        expect(fixture.componentInstance.activeItemIndex()).toBe(1);
        expect(getActiveTab()).toBe('Item #1');
    });

    it('prefers the index written from outside in the same pass as a reorder', async () => {
        reverse();
        fixture.componentInstance.activeItemIndex.set(2);
        await settle();

        expect(fixture.componentInstance.activeItemIndex()).toBe(2);
        expect(getActiveTab()).toBe('Item #2');
    });

    it('keeps the index written from outside after a reorder', async () => {
        reverse();
        await settle();

        fixture.componentInstance.activeItemIndex.set(1);
        await settle();

        expect(fixture.componentInstance.activeItemIndex()).toBe(1);
        expect(getActiveTab()).toBe('Item #3');
    });

    it('activates the tab under the index when items are refilled after being emptied', async () => {
        fixture.componentInstance.items.set([]);
        await settle();

        expect(getActiveTab()).toBeUndefined();

        fixture.componentInstance.items.set(['A', 'B']);
        await settle();

        expect(fixture.componentInstance.activeItemIndex()).toBe(0);
        expect(getActiveTab()).toBe('A');
    });

    it('emits the new index once when active tab is reordered', async () => {
        reverse();
        await settle();

        expect(emitted).toEqual([4]);
    });

    it('does not emit when index is written from outside', async () => {
        fixture.componentInstance.activeItemIndex.set(4);
        await settle();

        expect(emitted).toEqual([]);
    });

    it('does not emit when items change without moving the active tab', async () => {
        fixture.componentInstance.items.update((items) => [...items, 'New']);
        await settle();

        expect(emitted).toEqual([]);
    });

    it('does not emit when active item is removed', async () => {
        fixture.componentInstance.items.update((items) => items.slice(1));
        await settle();

        expect(emitted).toEqual([]);
    });
});
