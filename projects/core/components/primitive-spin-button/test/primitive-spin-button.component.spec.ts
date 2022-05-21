import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    TuiPrimitiveSpinButtonComponent,
    TuiPrimitiveSpinButtonModule,
} from '@taiga-ui/core';
import {configureTestSuite} from '@taiga-ui/testing';

describe('primitiveSpinButton', () => {
    @Component({
        template: `
            <tui-primitive-spin-button>My button</tui-primitive-spin-button>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPrimitiveSpinButtonComponent, {static: true})
        component!: TuiPrimitiveSpinButtonComponent;
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

    it('emits left click if it is not disabled', () => {
        let result: unknown = {};

        component.leftClick.subscribe((voidResult: void) => {
            result = voidResult;
        });

        component.onLeftClick();

        expect(result).not.toBeDefined();
    });

    it('emits right click if it is not disabled', () => {
        let result: unknown = {};

        component.rightClick.subscribe((voidResult: void) => {
            result = voidResult;
        });

        component.onRightClick();

        expect(result).not.toBeDefined();
    });

    it('emits focus if it was updated', () => {
        let result: unknown;

        component.focusedChange.subscribe((focused: boolean) => {
            result = focused;
        });

        component.onFocused(true);

        expect(result).toBe(true);
    });

    it('emits focusVisible if it was updated', () => {
        let result: unknown;

        component.focusVisibleChange.subscribe((focusVisible: boolean) => {
            result = focusVisible;
        });

        component.onFocusVisible(true);

        expect(result).toBe(true);
    });
});
