import {
    ChangeDetectorRef,
    Component,
    inject,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    AbstractTuiControl,
    tuiAsControl,
    TuiControlValueTransformer,
} from '@taiga-ui/cdk';

describe('AbstractTuiControl and FormControl', () => {
    @Component({
        selector: 'child',
        template: '',
    })
    class ChildComponent {
        public readonly parent = inject(AbstractTuiControl, {
            optional: true,
        }) as MyControlComponent;
    }

    @Component({
        selector: 'my-control',
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
        public child!: ChildComponent;

        public focused = false;
        public ngOnInitTick = false;
        public ngOnDestroyTick = false;

        public forceUpdateFocused(focused: boolean): void {
            super.updateFocused(focused);

            this.focused = focused;
        }

        public getTransformers(): TuiControlValueTransformer<string> | null | undefined {
            return this.valueTransformer;
        }

        public override ngOnInit(): void {
            super.ngOnInit();

            this.ngOnInitTick = true;
        }

        public override ngOnDestroy(): void {
            super.ngOnDestroy();

            this.ngOnDestroyTick = true;
        }

        public getFallbackValue(): string {
            return 'fallback';
        }
    }

    @Component({
        template: `
            <my-control [formControl]="control"></my-control>
        `,
    })
    class TestComponent {
        @ViewChild(MyControlComponent)
        public myControl!: MyControlComponent;

        public control = new FormControl('Hello');
    }

    let fixture: ComponentFixture<TestComponent>;
    let controlInstance: MyControlComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            declarations: [TestComponent, MyControlComponent, ChildComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
        controlInstance = fixture.componentInstance.myControl.child.parent!;
    });

    it('default behaviour', () => {
        expect(controlInstance).toBeTruthy();
        expect(controlInstance.child.parent).toBeInstanceOf(MyControlComponent);
        expect(controlInstance.readOnly).toBe(false);
        expect(controlInstance.nativeId).toBe('');

        expect(controlInstance.getTransformers()).toBeNull();
        expect(controlInstance.value).toBe('Hello');
        expect(controlInstance.safeCurrentValue).toBe('Hello');
        expect(controlInstance.invalid).toBe(false);
        expect(controlInstance.valid).toBe(true);
        expect(controlInstance.touched).toBe(false);
        expect(controlInstance.disabled).toBe(false);
        expect(controlInstance.interactive).toBe(true);
        expect(controlInstance.control).toBeInstanceOf(FormControl);
    });

    it('pseudo', () => {
        expect(controlInstance.pseudoFocus).toBeNull();
        expect(controlInstance.pseudoHover).toBeNull();
        expect(controlInstance.pseudoActive).toBeNull();
        expect(controlInstance.pseudoInvalid).toBeNull();
    });

    it('computed', () => {
        expect(controlInstance.computedName).toBeNull();
        expect(controlInstance.computedDisabled).toBe(false);
        expect(controlInstance.computedInvalid).toBe(false);
        expect(controlInstance.computedFocusable).toBe(true);
        expect(controlInstance.computedFocusVisible).toBe(false);
        expect(controlInstance.computedFocused).toBe(false);

        controlInstance.pseudoFocus = true;
        controlInstance.pseudoHover = true;
        controlInstance.pseudoActive = true;

        expect(controlInstance.computedFocusable).toBe(true);
        expect(controlInstance.computedFocusVisible).toBe(true);
        expect(controlInstance.computedFocused).toBe(true);
    });

    it('focusable', () => {
        const focusedChange = jest.spyOn(controlInstance.focusedChange, 'emit');

        expect(controlInstance.focused).toBe(false);
        expect(controlInstance.focusable).toBe(true);
        expect(controlInstance.touched).toBe(false);
        expect(focusedChange).not.toHaveBeenCalled();

        controlInstance.forceUpdateFocused(true);

        expect(controlInstance.focused).toBe(true);
        expect(controlInstance.focusable).toBe(true);
        expect(controlInstance.touched).toBe(false);
        expect(focusedChange).toHaveBeenCalled();

        controlInstance.forceUpdateFocused(false);

        expect(controlInstance.focused).toBe(false);
        expect(controlInstance.focusable).toBe(true);
        expect(controlInstance.touched).toBe(true);
        expect(focusedChange).toHaveBeenCalled();
    });

    it('id', () => {
        expect(controlInstance.nativeId).toBe('');
        expect(controlInstance.id.startsWith('tui_interactive_')).toBeTruthy();
    });

    it('setup value', () => {
        expect(controlInstance.value).toBe('Hello');
        expect(controlInstance.safeCurrentValue).toBe('Hello');

        controlInstance.value = '5';
        expect(controlInstance.value).toBe('5');
        expect(controlInstance.safeCurrentValue).toBe('5');

        controlInstance.writeValue(null);
        expect(controlInstance.value).toBe('fallback');
        expect(controlInstance.safeCurrentValue).toBe('5');

        controlInstance.writeValue('');
        expect(controlInstance.value).toBe('');
        expect(controlInstance.safeCurrentValue).toBe('5');
    });

    describe('change detection', () => {
        let changeDetectorRef: ChangeDetectorRef;
        let markForCheckSpy: jest.SpyInstance;

        beforeEach(() => {
            changeDetectorRef = fixture.debugElement.injector.get(ChangeDetectorRef);
            markForCheckSpy = jest.spyOn(
                changeDetectorRef.constructor.prototype,
                'markForCheck',
            );

            markForCheckSpy.mockClear();
        });

        it('checkControlUpdate', () => {
            expect(markForCheckSpy).not.toHaveBeenCalled();

            controlInstance.checkControlUpdate();

            expect(markForCheckSpy).toHaveBeenCalled();
        });

        it('setDisabledState', () => {
            expect(markForCheckSpy).not.toHaveBeenCalled();
            expect(controlInstance.disabled).toBe(false);

            controlInstance.setDisabledState();

            expect(markForCheckSpy).toHaveBeenCalled();
            expect(controlInstance.disabled).toBe(false);
        });
    });
});
