import {
    ChangeDetectionStrategy,
    Component,
    type DebugElement,
    model,
    viewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideRouter, RouterLink, RouterLinkActive} from '@angular/router';
import {RouterTestingHarness} from '@angular/router/testing';
import {provideTaiga} from '@taiga-ui/core';
import {TuiTabs, TuiTabsDirective} from '@taiga-ui/kit';

describe('Tabs | dynamic tabs', () => {
    @Component({template: ''})
    class Page {}

    @Component({
        imports: [RouterLink, RouterLinkActive, TuiTabs],
        template: `
            <tui-tabs [(activeItemIndex)]="activeItemIndex">
                @for (tab of tabs(); track tab) {
                    <a
                        tuiTab
                        routerLinkActive
                        [routerLink]="tab"
                    >
                        {{ tab }}
                    </a>
                }
            </tui-tabs>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestWithRouterLink {
        public readonly tabsDirective = viewChild.required(TuiTabsDirective);
        public readonly activeItemIndex = model(0);
        public readonly tabs = model(['a', 'b', 'c']);
    }

    @Component({
        imports: [TuiTabs],
        template: `
            <tui-tabs [(activeItemIndex)]="activeItemIndex">
                @for (tab of tabs(); track tab) {
                    <button
                        tuiTab
                        type="button"
                    >
                        {{ tab }}
                    </button>
                }
            </tui-tabs>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class TestWithButtons {
        public readonly activeItemIndex = model(0);
        public readonly tabs = model(['a', 'b', 'c']);
    }

    function getTabs(fixture: ComponentFixture<unknown>): HTMLElement[] {
        return fixture.debugElement
            .queryAll(By.css('[tuiTab]'))
            .map((tab: DebugElement) => tab.nativeElement as HTMLElement);
    }

    async function settle(fixture: ComponentFixture<unknown>): Promise<void> {
        // RouterLinkActive updates in a microtask, the tabs react to mutations after it
        for (let i = 0; i < 5; i++) {
            await fixture.whenStable();
            fixture.detectChanges();
        }
    }

    describe('routerLink', () => {
        let harness: RouterTestingHarness;
        let fixture: ComponentFixture<TestWithRouterLink>;

        async function activate(path: string): Promise<void> {
            await harness.navigateByUrl(`/${path}`);
            await settle(fixture);
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({
                providers: [
                    provideTaiga(),
                    provideRouter(
                        ['a', 'b', 'c', 'new'].map((path) => ({path, component: Page})),
                    ),
                ],
            });

            harness = await RouterTestingHarness.create();
            fixture = TestBed.createComponent(TestWithRouterLink);
            fixture.detectChanges();
        });

        it('keeps active tab when a new tab is added to the left of it', async () => {
            await activate('c');

            expect(fixture.componentInstance.activeItemIndex()).toBe(2);

            fixture.componentInstance.tabs.set(['new', 'a', 'b', 'c']);
            fixture.detectChanges();

            const [, , , active] = getTabs(fixture);

            expect(active?.classList.contains('_active')).toBe(true);

            await settle(fixture);

            const [added, , , activeAfter] = getTabs(fixture);

            expect(added?.classList.contains('_active')).toBe(false);
            expect(added?.getAttribute('tabindex')).toBe('-1');
            expect(activeAfter?.classList.contains('_active')).toBe(true);
            expect(activeAfter?.getAttribute('tabindex')).toBe('0');
            expect(fixture.componentInstance.activeItemIndex()).toBe(3);
        });

        it('keeps active tab when a new tab is added to the right of it', async () => {
            await activate('b');

            fixture.componentInstance.tabs.set(['a', 'b', 'c', 'new']);
            await settle(fixture);

            const [, active, , added] = getTabs(fixture);

            expect(active?.classList.contains('_active')).toBe(true);
            expect(added?.classList.contains('_active')).toBe(false);
            expect(fixture.componentInstance.activeItemIndex()).toBe(1);
        });

        it('keeps active tab when tabs are reordered', async () => {
            await activate('b');

            fixture.componentInstance.tabs.set(['a', 'c', 'b']);
            await settle(fixture);

            const [, , active] = getTabs(fixture);

            expect(active?.classList.contains('_active')).toBe(true);
            expect(active?.getAttribute('tabindex')).toBe('0');
            expect(fixture.componentInstance.activeItemIndex()).toBe(2);
        });
    });

    describe('programmatic change', () => {
        let fixture: ComponentFixture<TestWithButtons>;

        beforeEach(() => {
            TestBed.configureTestingModule({providers: [provideTaiga()]});

            fixture = TestBed.createComponent(TestWithButtons);
            fixture.detectChanges();
        });

        it('keeps the index set from outside after items are added', async () => {
            fixture.componentRef.setInput('activeItemIndex', 2);
            fixture.detectChanges();
            await settle(fixture);

            expect(getTabs(fixture)[2]?.classList.contains('_active')).toBe(true);

            fixture.componentInstance.tabs.set(['new', 'a', 'b', 'c']);
            fixture.detectChanges();
            await settle(fixture);

            fixture.componentRef.setInput('activeItemIndex', 0);
            fixture.detectChanges();
            await settle(fixture);

            expect(getTabs(fixture)[0]?.classList.contains('_active')).toBe(true);
            expect(fixture.componentInstance.activeItemIndex()).toBe(0);
        });

        it('keeps the index written in the same pass as a new item', async () => {
            const [, secondTab] = getTabs(fixture);

            secondTab?.click();
            fixture.detectChanges();
            await settle(fixture);

            expect(fixture.componentInstance.activeItemIndex()).toBe(1);

            fixture.componentInstance.tabs.set(['new', 'a', 'b', 'c']);
            fixture.componentRef.setInput('activeItemIndex', 0);
            fixture.detectChanges();
            await settle(fixture);

            const [added, first] = getTabs(fixture);

            expect(added?.classList.contains('_active')).toBe(true);
            expect(first?.classList.contains('_active')).toBe(false);
            expect(fixture.componentInstance.activeItemIndex()).toBe(0);
        });
    });

    describe('buttons', () => {
        let fixture: ComponentFixture<TestWithButtons>;

        beforeEach(() => {
            TestBed.configureTestingModule({providers: [provideTaiga()]});

            fixture = TestBed.createComponent(TestWithButtons);
            fixture.detectChanges();
        });

        it('activates the right tab after a tab is added to the left', async () => {
            const [, secondTab] = getTabs(fixture);

            secondTab?.click();
            fixture.detectChanges();
            await settle(fixture);

            expect(fixture.componentInstance.activeItemIndex()).toBe(1);

            fixture.componentInstance.tabs.set(['new', 'a', 'b', 'c']);
            fixture.detectChanges();
            await settle(fixture);

            const [added, first, second, third] = getTabs(fixture);

            expect(added?.classList.contains('_active')).toBe(false);
            expect(first?.classList.contains('_active')).toBe(false);
            expect(second?.classList.contains('_active')).toBe(true);
            expect(third?.classList.contains('_active')).toBe(false);
            expect(fixture.componentInstance.activeItemIndex()).toBe(2);

            first?.click();
            fixture.detectChanges();
            await settle(fixture);

            expect(first?.classList.contains('_active')).toBe(true);
            expect(second?.classList.contains('_active')).toBe(false);
            expect(fixture.componentInstance.activeItemIndex()).toBe(1);
        });

        it('moves focus relative to the newly added tab', async () => {
            fixture.componentInstance.tabs.set(['new', 'a', 'b', 'c']);
            fixture.detectChanges();
            await settle(fixture);

            const [, first] = getTabs(fixture);

            first?.focus();
            first?.dispatchEvent(
                new KeyboardEvent('keydown', {key: 'ArrowRight', bubbles: true}),
            );

            const [, , second] = getTabs(fixture);

            expect(document.activeElement === second).toBe(true);
        });
    });
});
