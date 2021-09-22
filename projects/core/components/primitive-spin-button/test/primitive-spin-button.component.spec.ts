import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiPrimitiveSpinButtonComponent} from '../primitive-spin-button.component';
import {TuiPrimitiveSpinButtonModule} from '../primitive-spin-button.module';

describe('primitiveSpinButton', () => {
    @Component({
        template: ` <tui-primitive-spin-button> My button </tui-primitive-spin-button> `,
    })
    class TestComponent {
        @ViewChild(TuiPrimitiveSpinButtonComponent, {static: true})
        component: TuiPrimitiveSpinButtonComponent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiPrimitiveSpinButtonComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPrimitiveSpinButtonModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    it('emits left click if it is not disabled', done => {
        component.leftClick.subscribe((voidResult: void) => {
            expect(voidResult).not.toBeDefined();
            done();
        });

        component.onLeftClick();
    });

    it('emits right click if it is not disabled', done => {
        component.rightClick.subscribe((voidResult: void) => {
            expect(voidResult).not.toBeDefined();
            done();
        });

        component.onRightClick();
    });

    it('emits focus if it was updated', done => {
        component.focusedChange.subscribe((focused: boolean) => {
            expect(focused).toBe(true);
            done();
        });

        component.onFocused(true);
    });

    it('emits focusVisible if it was updated', done => {
        component.focusVisibleChange.subscribe((focusVisible: boolean) => {
            expect(focusVisible).toBe(true);
            done();
        });

        component.onFocusVisible(true);
    });
});
