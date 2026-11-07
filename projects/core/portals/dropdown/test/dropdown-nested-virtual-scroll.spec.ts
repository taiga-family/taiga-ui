import {CdkVirtualScrollViewport, ScrollingModule} from '@angular/cdk/scrolling';
import {ChangeDetectionStrategy, Component, input, type Type} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideTaiga, TuiDataList, TuiDropdown, TuiRoot} from '@taiga-ui/core';
import {tuiSwitchNgDevMode} from '@taiga-ui/jest-config';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'app-content',
    imports: [ScrollingModule, TuiDataList],
    template: `
        <cdk-virtual-scroll-viewport
            itemSize="42"
            [style.height.px]="200"
        >
            <tui-data-list>
                <button
                    *cdkVirtualFor="let item of items"
                    tuiOption
                    type="button"
                >
                    {{ item }}
                </button>
            </tui-data-list>
        </cdk-virtual-scroll-viewport>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Content {
    protected readonly items = ['Albania', 'Algeria', 'Andorra', 'Angola'];
}

@Component({
    selector: 'app-row',
    imports: [TuiDropdown],
    template: `
        <button
            type="button"
            [tuiDropdown]="content"
            [tuiDropdownOpen]="open()"
        >
            Open
        </button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Row {
    public readonly open = input(false);

    protected readonly content = new PolymorpheusComponent(Content);
}

@Component({
    imports: [Row, ScrollingModule, TuiRoot],
    template: `
        <tui-root>
            <cdk-virtual-scroll-viewport
                itemSize="96"
                [style.height.px]="300"
            >
                <app-row
                    *cdkVirtualFor="let row of [1, 2, 3]; let first = first"
                    [open]="first"
                />
            </cdk-virtual-scroll-viewport>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class InViewport {}

@Component({
    imports: [Row, ScrollingModule, TuiRoot],
    template: `
        <tui-root>
            <cdk-virtual-scroll-viewport
                itemSize="96"
                scrollWindow
            >
                <app-row
                    *cdkVirtualFor="let row of [1, 2, 3]; let first = first"
                    [open]="first"
                />
            </cdk-virtual-scroll-viewport>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class InWindow {}

@Component({
    imports: [Row, ScrollingModule, TuiRoot],
    template: `
        <tui-root>
            <div
                cdkVirtualScrollingElement
                [style.height.px]="300"
            >
                <cdk-virtual-scroll-viewport itemSize="96">
                    <app-row
                        *cdkVirtualFor="let row of [1, 2, 3]; let first = first"
                        [open]="first"
                    />
                </cdk-virtual-scroll-viewport>
            </div>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class InElement {}

describe('Dropdown with component content inside outer virtual scroll (#10095)', () => {
    let fixture: ComponentFixture<unknown>;

    beforeEach(() => {
        tuiSwitchNgDevMode(true);
        // jsdom has no layout, CDK needs a non-zero viewport to render items
        jest.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(300);
        TestBed.configureTestingModule({
            imports: [InViewport, InWindow, InElement],
            providers: [provideTaiga()],
        });
    });

    afterEach(() => {
        tuiSwitchNgDevMode(false);
        jest.restoreAllMocks();
    });

    describe.each<{outer: string; component: Type<unknown>}>([
        {outer: 'cdk-virtual-scroll-viewport', component: InViewport},
        {outer: 'scrollWindow', component: InWindow},
        {outer: 'cdkVirtualScrollingElement', component: InElement},
    ])('outer $outer', ({component}) => {
        beforeEach(async () => {
            fixture = TestBed.createComponent(component);

            for (let i = 0; i < 3; i++) {
                fixture.detectChanges();
                await fixture.whenStable();
            }
        });

        it('renders options of the inner virtual scroll', () => {
            expect(
                document.querySelectorAll('tui-dropdown button[tuiOption]'),
            ).toHaveLength(4);
        });

        it('scrolls the inner virtual scroll by itself', () => {
            const viewport = fixture.debugElement
                .query(By.css('tui-dropdown cdk-virtual-scroll-viewport'))
                .injector.get(CdkVirtualScrollViewport);

            const scrollsItself = viewport.scrollable === viewport;

            expect(scrollsItself).toBe(true);
        });
    });
});
