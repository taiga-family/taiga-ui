import {
    ChangeDetectorRef,
    Component,
    inject,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    AbstractTuiControl,
    tuiAsControl,
    TuiControlValueTransformer,
} from '@taiga-ui/cdk';

describe('AbstractTuiControl and NgControl not injected in MyControlComponent', () => {
    @Component({
        selector: 'child',
        template: '',
    })
    class ChildComponent {
        protected readonly parent = inject(AbstractTuiControl, {
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
        protected child!: ChildComponent;

        protected focused = false;
        protected ngOnInitTick = false;
        protected ngOnDestroyTick = false;

        protected forceUpdateFocused(focused: boolean): void {
            super.updateFocused(focused);

            this.focused = focused;
        }

        protected getTransformers():
            | TuiControlValueTransformer<string>
            | null
            | undefined {
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

        protected getFallbackValue(): string {
            return 'fallback';
        }
    }

    @Component({
        template: `
            <my-control *ngIf="enabled"></my-control>
        `,
    })
    class TestComponent {
        @ViewChild(MyControlComponent)
        protected myControl!: MyControlComponent;

        protected enabled = true;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let controlInstance: MyControlComponent;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, MyControlComponent, ChildComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();

        testComponent = fixture.componentInstance;
        controlInstance = fixture.componentInstance.myControl.child.parent!;
    });

    it('default behaviour', () => {
        expect(controlInstance).toBeTruthy();
        expect(controlInstance.child.parent).toBeInstanceOf(MyControlComponent);
        expect(controlInstance.readOnly).toBe(false);
        expect(controlInstance.nativeId).toBe('');

        expect(controlInstance.getTransformers()).toBeNull();
        expect(controlInstance.value).toBe('fallback');
        expect(controlInstance.safeCurrentValue).toBe('fallback');
        expect(controlInstance.invalid).toBe(false);
        expect(controlInstance.valid).toBe(false);
        expect(controlInstance.touched).toBe(false);
        expect(controlInstance.disabled).toBe(false);
        expect(controlInstance.interactive).toBe(true);
        expect(controlInstance.control).toBeNull();
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
        expect(controlInstance.touched).toBe(false);
        expect(focusedChange).toHaveBeenCalled();
    });

    it('id', () => {
        expect(controlInstance.nativeId).toBe('');
        expect(controlInstance.id.startsWith('tui_interactive_')).toBeTruthy();
    });

    it('setup value', () => {
        expect(controlInstance.value).toBe('fallback');
        expect(controlInstance.safeCurrentValue).toBe('fallback');

        controlInstance.value = '5';
        expect(controlInstance.value).toBe('5');
        expect(controlInstance.safeCurrentValue).toBe('fallback');

        controlInstance.writeValue(null);
        expect(controlInstance.value).toBe('fallback');
        expect(controlInstance.safeCurrentValue).toBe('fallback');

        controlInstance.writeValue('');
        expect(controlInstance.value).toBe('');
        expect(controlInstance.safeCurrentValue).toBe('fallback');
    });

    it('lifecycle', () => {
        expect(controlInstance.ngOnInitTick).toBe(true);
        expect(controlInstance.ngOnDestroyTick).toBe(false);

        testComponent.enabled = false;
        fixture.detectChanges();

        expect(controlInstance.ngOnDestroyTick).toBe(true);
        expect(testComponent.myControl).toBeUndefined();
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
