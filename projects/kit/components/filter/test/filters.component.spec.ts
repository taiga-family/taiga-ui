import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ALWAYS_FALSE_HANDLER, TuiBooleanHandler, TuiHandler} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiFilterComponent} from '../filter.component';
import {TuiFilterModule} from '../filter.module';

const BADGE_VALUE = 10;

class ItemWithBadge {
    constructor(readonly text: string, readonly badgeValue?: number) {}

    toString(): string {
        return this.text;
    }

    valueOf(): number | null {
        return this.badgeValue !== undefined ? this.badgeValue : null;
    }
}

const ARR_STRING = ['Clothes and footwear'];

const ARR_OBJECT = [new ItemWithBadge('Focused Zone', BADGE_VALUE)];

const ARR_OBJECT_WITH_ZERO_BADGE = [new ItemWithBadge('Focused Zone', 0)];

describe('Filter', () => {
    @Component({
        template: `
            <tui-filter
                [badgeHandler]="badgeHandler"
                [disabledItemHandler]="disabledItemHandler"
                [formControl]="control"
                [items]="items"
                [size]="size"
            ></tui-filter>
        `,
    })
    class TestComponent {
        @ViewChild(TuiFilterComponent, {static: true})
        component: TuiFilterComponent<any>;

        badgeHandler: TuiHandler<any, number> = item => Number(item);

        disabledItemHandler: TuiBooleanHandler<any> = ALWAYS_FALSE_HANDLER;

        control = new FormControl([]);

        items: ReadonlyArray<any> = ARR_STRING;

        size: TuiSizeS = 'm';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiFilterComponent<any>;
    let pageObject: PageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-filter__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, NoopAnimationsModule, TuiFilterModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    function getCheckbox(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}checkbox`)!;
    }

    function getContent(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}content`)!;
    }

    function getBadge(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}badge`)!;
    }

    describe('value', () => {
        it('default absent', () => {
            expect(testComponent.control.value.length).toBe(0);
        });

        it('set from checked items', () => {
            component.onCheckbox(true, ARR_STRING[0]);
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
            expect(getContent().nativeElement.textContent.trim()).toBe(
                'Clothes and footwear',
            );
        });

        it('passed correctly if items is an array of objects with toString', () => {
            testComponent.items = ARR_OBJECT;
            fixture.detectChanges();

            expect(getContent().nativeElement.textContent.trim()).toBe('Focused Zone10');
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

            expect(+getBadge().nativeElement.textContent).toBe(BADGE_VALUE);
        });
    });

    describe('disabled element', () => {
        it('false by default', () => {
            expect(getCheckbox().nativeElement.classList.contains('_disabled')).toBe(
                false,
            );
        });

        it('present if disabledHandler returned true', () => {
            testComponent.disabledItemHandler = item => item.indexOf('footwear') > -1;
            fixture.detectChanges();
            expect(getCheckbox().componentInstance.ngControl.isDisabled).toBe(true);
        });
    });

    describe('size', () => {
        it('if m, then both CheckboxBlock and badge have m', () => {
            testComponent.items = ARR_OBJECT;
            fixture.detectChanges();

            expect(getCheckbox().attributes['data-tui-host-size']).toBe('m');
            expect(getBadge().attributes['data-tui-host-size']).toBe('m');
        });

        it('if s, then both CheckboxBlock and badge have s', () => {
            testComponent.items = ARR_OBJECT;
            testComponent.size = 's';
            fixture.detectChanges();

            expect(getCheckbox().attributes['data-tui-host-size']).toBe('s');
            expect(getBadge().attributes['data-tui-host-size']).toBe('s');
        });
    });
});
