import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiMonth} from '@taiga-ui/cdk';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputMonthComponent} from '../input-month.component';
import {TuiInputMonthModule} from '../input-month.module';

describe('InputMonth', () => {
    @Component({
        template: ` <tui-input-month [formControl]="control"></tui-input-month> `,
    })
    class TestComponent {
        @ViewChild(TuiInputMonthComponent, {static: true})
        component: TuiInputMonthComponent;

        control = new FormControl(null);
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputMonthComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, NoopAnimationsModule, TuiInputMonthModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    describe('computedValue', () => {
        it('returns empty string if no value', () => {
            testComponent.control.setValue(null);

            expect(component.nativeFocusableElement!.value).toBe('');
        });

        it('returns the whole stringified value if there is', done => {
            testComponent.control.setValue(new TuiMonth(2020, 4));

            fixture.detectChanges();

            setTimeout(() => {
                expect(component.nativeFocusableElement!.value).toBe(`May 2020`);
                done();
            }, 50);
        });
    });

    describe('onMonthClick', () => {
        it('set value', () => {
            const newMonth = new TuiMonth(2020, 5);

            component.onMonthClick(newMonth);

            expect(component.value).toBe(newMonth);
        });

        it('closes dropdown', () => {
            const newMonth = new TuiMonth(2020, 5);

            component.onMonthClick(newMonth);

            expect(component.open).toBe(false);
        });
    });
});
