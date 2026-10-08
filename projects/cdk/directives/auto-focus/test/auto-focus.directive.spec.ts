import {
    ChangeDetectionStrategy,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    ElementRef,
    NgZone,
    Renderer2,
    viewChild,
} from '@angular/core';
import {
    type ComponentFixture,
    fakeAsync,
    flushMicrotasks,
    TestBed,
    tick,
} from '@angular/core/testing';
import {WA_WINDOW} from '@ng-web-apis/common';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {
    TUI_AUTOFOCUS_HANDLER,
    TUI_AUTOFOCUS_OPTIONS,
    TuiAutoFocus,
    type TuiAutofocusOptions,
    TuiIosAutofocusHandler,
    tuiIsFocused,
} from '@taiga-ui/cdk';
import {provideTaiga} from '@taiga-ui/core';

describe('TuiAutoFocus directive', () => {
    describe('works for focusable HTML element', () => {
        @Component({
            imports: [TuiAutoFocus],
            template: `
                <div
                    tabindex="0"
                    tuiAutoFocus
                ></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestWithDiv {
            public readonly element = viewChild.required(TuiAutoFocus, {
                read: ElementRef,
            });
        }

        let fixture: ComponentFixture<TestWithDiv>;
        let testComponent: TestWithDiv;

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TestWithDiv],
                providers: [provideTaiga()],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(TestWithDiv);
            testComponent = fixture.componentInstance;
        });

        it('focuses', fakeAsync(() => {
            fixture.detectChanges();
            tick(100);

            expect(tuiIsFocused(testComponent.element().nativeElement)).toBe(true);
        }));
    });

    describe('works for iOS decoy method', () => {
        @Component({
            imports: [TuiAutoFocus],
            template: `
                <input tuiAutoFocus />
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestIos {
            public readonly element = viewChild.required(TuiAutoFocus, {
                read: ElementRef,
            });
        }

        let fixture: ComponentFixture<TestIos>;
        let testComponent: TestIos;

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TestIos],
                providers: [
                    provideTaiga(),
                    {
                        provide: TUI_AUTOFOCUS_HANDLER,
                        useClass: TuiIosAutofocusHandler,
                        deps: [
                            ElementRef,
                            Renderer2,
                            NgZone,
                            WA_WINDOW,
                            TUI_AUTOFOCUS_OPTIONS,
                        ],
                        useFactory: (
                            el: ElementRef<HTMLElement>,
                            renderer: Renderer2,
                            zone: NgZone,
                            win: Window,
                            options: TuiAutofocusOptions,
                        ) => new TuiIosAutofocusHandler(el, renderer, zone, win, options),
                    },
                ],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(TestIos);
            testComponent = fixture.componentInstance;
        });

        it('focuses', fakeAsync(() => {
            fixture.detectChanges();
            tick(100);

            expect(tuiIsFocused(testComponent.element().nativeElement)).toBe(true);
        }));
    });

    describe('iOS decoy method inside SheetDialog', () => {
        @Component({
            imports: [TuiAutoFocus],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            template: `
                <tui-modal>
                    <tui-sheet-dialog>
                        <input tuiAutoFocus />
                    </tui-sheet-dialog>
                </tui-modal>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestIosSheetDialog {}

        let fixture: ComponentFixture<TestIosSheetDialog>;

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TestIosSheetDialog],
                providers: [provideTaiga(), {provide: WA_IS_IOS, useValue: true}],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(TestIosSheetDialog);
        });

        it('appends fake input outside of the modal', fakeAsync(() => {
            fixture.detectChanges();
            flushMicrotasks();

            const modal: HTMLElement = fixture.nativeElement.querySelector('tui-modal');

            expect(modal.querySelectorAll('input').length).toBe(1);

            tick();
        }));
    });

    describe('iOS defers focus of non-text-field until the entrance animation finishes', () => {
        @Component({
            imports: [TuiAutoFocus],
            template: `
                <div class="tui-animated">
                    <button
                        tuiAutoFocus
                        type="button"
                    >
                        Ok
                    </button>
                </div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestIosButton {
            public readonly element = viewChild.required(TuiAutoFocus, {
                read: ElementRef,
            });
        }

        let fixture: ComponentFixture<TestIosButton>;
        let testComponent: TestIosButton;
        let finishAnimation!: () => void;

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TestIosButton],
                providers: [provideTaiga(), {provide: WA_IS_IOS, useValue: true}],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(TestIosButton);
            testComponent = fixture.componentInstance;

            const animated: HTMLElement =
                fixture.nativeElement.querySelector('.tui-animated');

            const finished = new Promise<void>((resolve) => {
                finishAnimation = resolve;
            });

            animated.getAnimations = () => [{finished} as unknown as Animation];
        });

        it('does not focus while the animation is running', fakeAsync(() => {
            fixture.detectChanges();
            tick(100);

            expect(tuiIsFocused(testComponent.element().nativeElement)).toBe(false);

            finishAnimation();
            tick(100);

            expect(tuiIsFocused(testComponent.element().nativeElement)).toBe(true);
        }));
    });

    describe('autoFocus flag is false', () => {
        @Component({
            imports: [TuiAutoFocus],
            template: `
                <div
                    tabindex="0"
                    [tuiAutoFocus]="autoFocus"
                ></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestWithFocusFlag {
            public readonly element = viewChild.required(TuiAutoFocus, {
                read: ElementRef,
            });

            public autoFocus = false;
        }

        let fixture: ComponentFixture<TestWithFocusFlag>;
        let testComponent: TestWithFocusFlag;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TestWithFocusFlag],
                providers: [provideTaiga()],
            });

            fixture = TestBed.createComponent(TestWithFocusFlag);
            testComponent = fixture.componentInstance;
        });

        it('does not focus element', fakeAsync(() => {
            fixture.detectChanges();
            tick(100);

            expect(tuiIsFocused(testComponent.element().nativeElement)).toBe(false);
        }));
    });
});
