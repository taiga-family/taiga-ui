import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiBooleanHandler, TuiHandler} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiFilter} from '@taiga-ui/kit';

const BADGE_VALUE = 10;

class ItemWithBadge {
    constructor(
        public readonly text: string,
        public readonly badgeValue?: number,
    ) {}

    public toString(): string {
        return this.text;
    }

    public valueOf(): number | null {
        return this.badgeValue ?? null;
    }
}

const ARR_STRING = ['Clothes and footwear'];

const ARR_OBJECT = [new ItemWithBadge('Focused Zone', BADGE_VALUE)];

const ARR_OBJECT_WITH_ZERO_BADGE = [new ItemWithBadge('Focused Zone', 0)];

describe('Filter', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiFilter],
        template: `
            <tui-filter
                [badgeHandler]="badgeHandler"
                [disabledItemHandler]="disabledItemHandler"
                [formControl]="control"
                [items]="items"
                [size]="size"
            ></tui-filter>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiFilter, {static: true})
        public component!: TuiFilter<any>;

        public disabledItemHandler: TuiBooleanHandler<any> = TUI_FALSE_HANDLER;

        public control = new FormControl<string[]>([]);

        public items: readonly ItemWithBadge[] | readonly string[] = ARR_STRING;

        public size: TuiSizeS = 'm';

        public badgeHandler: TuiHandler<unknown, number> = (item) => Number(item);
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiFilter<ItemWithBadge | string>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    function getCheckbox(): HTMLInputElement {
        return getContent().querySelector('input')!;
    }

    function getContent(): HTMLElement {
        return fixture.nativeElement;
    }

    function getBadge(): HTMLElement {
        return getContent().querySelector('tui-badge')!;
    }

    describe('value', () => {
        it('default absent', () => {
            expect(testComponent.control.value?.length).toBe(0);
        });

        it('set from checked items', () => {
            if (ARR_STRING[0]) {
                component.onCheckbox(true, ARR_STRING[0]);
            }

            fixture.detectChanges();

            expect(testComponent.control.value).toEqual(ARR_STRING);
        });

        it('set when creating a control', () => {
            testComponent.control.setValue(ARR_STRING);
            fixture.detectChanges();

            expect(testComponent.control.value).toBe(ARR_STRING);
        });
    });

    describe('content items', () => {
        it('passed correctly if items is an array of strings', () => {
            expect(getContent().textContent?.trim()).toBe('Clothes and footwear');
        });

        it('passed correctly if items is an array of objects with toString', () => {
            testComponent.items = ARR_OBJECT;
            fixture.detectChanges();

            expect(getContent().textContent?.trim()).toBe('Focused Zone  10');
        });
    });

    describe('badge', () => {
        it('missing if badgeHandler returns NaN', () => {
            expect(getBadge()).toBeNull();
        });

        it('missing if badgeHandler returns 0', () => {
            testComponent.items = ARR_OBJECT_WITH_ZERO_BADGE;
            fixture.detectChanges();

            expect(getBadge()).toBeNull();
        });

        it('present if badgeHandler returns a number', () => {
            testComponent.items = ARR_OBJECT;
            fixture.detectChanges();

            expect(getBadge()).not.toBeNull();
        });

        it('has the correct meaning', () => {
            testComponent.items = ARR_OBJECT;
            fixture.detectChanges();

            expect(Number(getBadge().textContent)).toBe(BADGE_VALUE);
        });
    });

    describe('disabled element', () => {
        it('false by default', () => {
            expect(getCheckbox().disabled).toBe(false);
        });

        it('present if disabledHandler returned true', async () => {
            testComponent.disabledItemHandler = (item) => item.indexOf('footwear') > -1;
            fixture.detectChanges();
            await fixture.whenStable();

            expect(getCheckbox().disabled).toBe(true);
        });
    });
});
