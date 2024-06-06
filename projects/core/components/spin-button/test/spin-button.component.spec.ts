import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiSpinButtonComponent} from '@taiga-ui/core';

describe('primitiveSpinButton', () => {
    @Component({
        standalone: true,
        imports: [TuiSpinButtonComponent],
        template: `
            <tui-spin-button>My button</tui-spin-button>
        `,
    })
    class TestComponent {
        @ViewChild(TuiSpinButtonComponent, {static: true})
        public component!: TuiSpinButtonComponent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiSpinButtonComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [TestComponent],
        });
        await TestBed.compileComponents();
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

        expect(result).toBeUndefined();
    });

    it('emits right click if it is not disabled', () => {
        let result: unknown = {};

        component.rightClick.subscribe((voidResult: void) => {
            result = voidResult;
        });

        component.onRightClick();

        expect(result).toBeUndefined();
    });
});
