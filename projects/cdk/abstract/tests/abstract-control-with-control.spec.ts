import {
    ChangeDetectorRef,
    Component,
    Inject,
    OnDestroy,
    OnInit,
    Optional,
    ViewChild,
} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    AbstractTuiControl,
    tuiAsControl,
    TuiControlValueTransformer,
} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`AbstractTuiControl and FormControl`, () => {
    @Component({
        selector: `child`,
        template: ``,
    })
    class ChildComponent {
        constructor(
            @Optional()
            @Inject(AbstractTuiControl)
            readonly parent: MyControlComponent | null,
        ) {}
    }

    @Component({
        selector: `my-control`,
        template: `
            <child></child>
        `,
        providers: [tuiAsControl(MyControlComponent)],
    })
    class MyControlComponent
        extends AbstractTuiControl<string>
        implements OnInit, OnDestroy
    {
        @ViewChild(ChildComponent)
        child!: ChildComponent;

        focused = false;
        ngOnInitTick = false;
        ngOnDestroyTick = false;

        forceUpdateFocused(focused: boolean): void {
            super.updateFocused(focused);

            this.focused = focused;
        }

        getTransformers(): TuiControlValueTransformer<string> | null | undefined {
            return this.valueTransformer;
        }

        override ngOnInit(): void {
            super.ngOnInit();

            this.ngOnInitTick = true;
        }

        override ngOnDestroy(): void {
            super.ngOnDestroy();

            this.ngOnDestroyTick = true;
        }

        protected getFallbackValue(): string {
            return `fallback`;
        }
    }

    @Component({
        template: `
            <my-control [formControl]="control"></my-control>
        `,
    })
    class TestComponent {
        @ViewChild(MyControlComponent)
        myControl!: MyControlComponent;

        control = new FormControl(`Hello`);
    }

    let fixture: ComponentFixture<TestComponent>;
    let controlInstance: MyControlComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            declarations: [TestComponent, MyControlComponent, ChildComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        controlInstance = fixture.componentInstance.myControl.child.parent!;
    });

    it(`default behaviour`, () => {
        expect(controlInstance).toBeTruthy();
        expect(controlInstance.child.parent).toBeInstanceOf(MyControlComponent);
        expect(controlInstance.readOnly).toEqual(false);
        expect(controlInstance.nativeId).toEqual(``);

        expect(controlInstance.getTransformers()).toEqual(null);
        expect(controlInstance.value).toEqual(`Hello`);
        expect(controlInstance.safeCurrentValue).toEqual(`Hello`);
        expect(controlInstance.invalid).toEqual(false);
        expect(controlInstance.valid).toEqual(true);
        expect(controlInstance.touched).toEqual(false);
        expect(controlInstance.disabled).toEqual(false);
        expect(controlInstance.interactive).toEqual(true);
        expect(controlInstance.control).toBeInstanceOf(FormControl);
    });

    it(`pseudo`, () => {
        expect(controlInstance.pseudoFocus).toEqual(null);
        expect(controlInstance.pseudoHover).toEqual(null);
        expect(controlInstance.pseudoActive).toEqual(null);
        expect(controlInstance.pseudoInvalid).toEqual(null);
    });

    it(`computed`, () => {
        expect(controlInstance.computedName).toEqual(null);
        expect(controlInstance.computedDisabled).toEqual(false);
        expect(controlInstance.computedInvalid).toEqual(false);
        expect(controlInstance.computedFocusable).toEqual(true);
        expect(controlInstance.computedFocusVisible).toEqual(false);
        expect(controlInstance.computedFocused).toEqual(false);

        controlInstance.pseudoFocus = true;
        controlInstance.pseudoHover = true;
        controlInstance.pseudoActive = true;

        expect(controlInstance.computedFocusable).toEqual(true);
        expect(controlInstance.computedFocusVisible).toEqual(true);
        expect(controlInstance.computedFocused).toEqual(true);
    });

    it(`focusable`, () => {
        const focusedChange = jest.spyOn(controlInstance.focusedChange, `emit`);

        expect(controlInstance.focused).toEqual(false);
        expect(controlInstance.focusable).toEqual(true);
        expect(controlInstance.touched).toEqual(false);
        expect(focusedChange).not.toHaveBeenCalled();

        controlInstance.forceUpdateFocused(true);

        expect(controlInstance.focused).toEqual(true);
        expect(controlInstance.focusable).toEqual(true);
        expect(controlInstance.touched).toEqual(false);
        expect(focusedChange).toHaveBeenCalled();

        controlInstance.forceUpdateFocused(false);

        expect(controlInstance.focused).toEqual(false);
        expect(controlInstance.focusable).toEqual(true);
        expect(controlInstance.touched).toEqual(true);
        expect(focusedChange).toHaveBeenCalled();
    });

    it(`id`, () => {
        expect(controlInstance.nativeId).toEqual(``);
        expect(controlInstance.id.startsWith(`tui_interactive_`)).toBeTruthy();
    });

    it(`setup value`, () => {
        expect(controlInstance.value).toEqual(`Hello`);
        expect(controlInstance.safeCurrentValue).toEqual(`Hello`);

        controlInstance.value = `5`;
        expect(controlInstance.value).toEqual(`5`);
        expect(controlInstance.safeCurrentValue).toEqual(`5`);

        controlInstance.writeValue(null);
        expect(controlInstance.value).toEqual(`fallback`);
        expect(controlInstance.safeCurrentValue).toEqual(`5`);

        controlInstance.writeValue(``);
        expect(controlInstance.value).toEqual(``);
        expect(controlInstance.safeCurrentValue).toEqual(`5`);
    });

    describe(`change detection`, () => {
        let changeDetectorRef: ChangeDetectorRef;
        let markForCheckSpy: jest.SpyInstance;

        beforeEach(() => {
            changeDetectorRef = fixture.debugElement.injector.get(ChangeDetectorRef);
            markForCheckSpy = jest.spyOn(
                changeDetectorRef.constructor.prototype,
                `markForCheck`,
            );

            markForCheckSpy.mockClear();
        });

        it(`checkControlUpdate`, () => {
            expect(markForCheckSpy).not.toHaveBeenCalled();

            controlInstance.checkControlUpdate();

            expect(markForCheckSpy).toHaveBeenCalled();
        });

        it(`setDisabledState`, () => {
            expect(markForCheckSpy).not.toHaveBeenCalled();
            expect(controlInstance.disabled).toEqual(false);

            controlInstance.setDisabledState();

            expect(markForCheckSpy).toHaveBeenCalled();
            expect(controlInstance.disabled).toEqual(false);
        });
    });
});
