import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiSpinButton} from '@taiga-ui/core';

describe('primitiveSpinButton', () => {
    @Component({
        standalone: true,
        imports: [TuiSpinButton],
        template: `
            <tui-spin-button>My button</tui-spin-button>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiSpinButton, {static: true})
        public component!: TuiSpinButton;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiSpinButton;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
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
