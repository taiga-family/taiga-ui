import {
    ChangeDetectionStrategy,
    Component,
    type DebugElement,
    input,
    model,
    viewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideTaiga, TuiHint} from '@taiga-ui/core';
import {TUI_TAB_ACTIVATE, TuiTabs, TuiTabsDirective} from '@taiga-ui/kit';

describe('Tabs', () => {
    @Component({
        imports: [TuiTabs],
        template: `
            <tui-tabs
                [(activeItemIndex)]="activeItemIndex"
                (${TUI_TAB_ACTIVATE})="onTabActivate()"
            >
                @for (tab of tabs(); track $index) {
                    <button tuiTab>{{ tab }}</button>
                }
            </tui-tabs>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly tabsDirective = viewChild.required(TuiTabsDirective);
        public readonly activeItemIndex = model(0);
        public readonly tabs = input([1, 2, 3]);

        public onTabActivate(): void {}
    }

    @Component({
        imports: [TuiHint, TuiTabs],
        template: `
            <tui-tabs>
                <button
                    tuiHint="Hint"
                    tuiTab
                >
                    First
                </button>
                <button tuiTab>Second</button>
            </tui-tabs>
        `,
    })
    class WithHint {}

    let fixture: ComponentFixture<Test>;
    let component: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test, WithHint],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();

        fixture = TestBed.createComponent(Test);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    function getTabs(): DebugElement[] {
        return fixture.debugElement.queryAll(By.css('[tuiTab]'));
    }

    it('keeps hint anchor when selection changes', () => {
        const hintFixture = TestBed.createComponent(WithHint);

        hintFixture.detectChanges();

        const root = hintFixture.nativeElement as HTMLElement;
        const first = root.querySelector<HTMLElement>('[tuiHint]')!;
        const second = first.nextElementSibling as HTMLElement;
        const hintAnchor = first.getAttribute('data-tui-anchor');

        expect(hintAnchor).toMatch(/^--/);
        expect(first.style.getPropertyValue('--tui-anchor')).toBe(hintAnchor);
        expect(first.classList.contains('_active')).toBe(true);

        second.click();
        hintFixture.detectChanges();

        expect(first.classList.contains('_active')).toBe(false);
        expect(second.classList.contains('_active')).toBe(true);
        expect(first.style.getPropertyValue('--tui-anchor')).toMatch(/^--/);
    });

    describe('Tabs component', () => {
        it('should render all tabs', () => {
            const tabs = [1, 2, 3, 4, 5];

            fixture.componentRef.setInput('tabs', tabs);
            fixture.detectChanges();

            expect(getTabs().length).toBe(tabs.length);
        });

        it('when you click on a tab it changes the active tab', () => {
            const [firstTab, secondTab] = getTabs().map(
                (tab) => tab.nativeElement as HTMLButtonElement,
            );

            expect(firstTab).toEqual(component.tabsDirective().activeElement);

            secondTab?.click();
            fixture.detectChanges();

            expect(firstTab).not.toEqual(component.tabsDirective().activeElement);
            expect(secondTab).toEqual(component.tabsDirective().activeElement);
        });

        it('when you click on a tab tui-tab-activate event emits once', () => {
            const [firstTab, secondTab] = getTabs().map(
                (tab) => tab.nativeElement as HTMLButtonElement,
            );

            secondTab?.click();
            fixture.detectChanges();

            jest.spyOn(component, 'onTabActivate');

            firstTab?.click();
            fixture.detectChanges();

            expect(component.activeItemIndex()).toBe(0);
            expect(component.onTabActivate).toHaveBeenCalledTimes(1);
        });

        it('when a tab is active, it has the class _active', () => {
            const [firstTab, secondTab] = getTabs().map(
                (tab) => tab.nativeElement as HTMLButtonElement,
            );

            expect(firstTab?.classList.contains('_active')).toBeTruthy();
            expect(secondTab?.classList.contains('_active')).toBeFalsy();

            secondTab?.click();
            fixture.detectChanges();

            expect(firstTab?.classList.contains('_active')).toBeFalsy();
            expect(secondTab?.classList.contains('_active')).toBeTruthy();
        });
    });
});
