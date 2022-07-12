import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    ViewChild,
} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {
    TUI_AUTOFOCUS_HANDLER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiAutoFocusDirective,
    TuiAutoFocusModule,
    TuiFocusableElementAccessor,
    TuiIosAutofocusHandler,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';
import {EMPTY} from 'rxjs';

describe('TuiAutoFocus directive', () => {
    describe('works for focusable HTML element', () => {
        @Component({
            template: `
                <div
                    tuiAutoFocus
                    tabindex="0"
                ></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestComponentWithDiv {
            @ViewChild(TuiAutoFocusDirective, {read: ElementRef})
            element!: ElementRef<HTMLElement>;
        }

        let fixture: ComponentFixture<TestComponentWithDiv>;
        let testComponent: TestComponentWithDiv;

        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiAutoFocusModule],
                declarations: [TestComponentWithDiv],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponentWithDiv);
            testComponent = fixture.componentInstance;
        });

        it('focuses', fakeAsync(() => {
            fixture.detectChanges();
            tick(100);
            expect(tuiIsNativeFocused(testComponent.element.nativeElement)).toBe(true);
        }));
    });

    describe('works for TUI_FOCUSABLE_ITEM_ACCESSOR', () => {
        @Component({
            template: `
                <p>
                    <input
                        #input
                        value="test"
                    />
                </p>
            `,
            selector: 'focusable-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [
                {
                    provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
                    useExisting: forwardRef(() => TestFocusableComponent),
                },
            ],
        })
        class TestFocusableComponent implements TuiFocusableElementAccessor {
            @ViewChild('input')
            input?: ElementRef<HTMLInputElement>;

            focusedChange = EMPTY;

            get nativeFocusableElement(): HTMLInputElement | null {
                return this.input ? this.input.nativeElement : null;
            }

            get focused(): boolean {
                return this.input
                    ? document.activeElement === this.input.nativeElement
                    : false;
            }
        }

        @Component({
            template: `
                <focusable-component tuiAutoFocus></focusable-component>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestComponentWithTuiButton {
            @ViewChild(TestFocusableComponent)
            focusable!: TestFocusableComponent;
        }

        let fixture: ComponentFixture<TestComponentWithTuiButton>;
        let testComponent: TestComponentWithTuiButton;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TuiAutoFocusModule],
                declarations: [TestComponentWithTuiButton, TestFocusableComponent],
            });

            fixture = TestBed.createComponent(TestComponentWithTuiButton);
            testComponent = fixture.componentInstance;
        });

        it('Focuses native element of a TUI_FOCUSABLE_ITEM_ACCESSOR', fakeAsync(() => {
            fixture.detectChanges();
            tick(100);
            expect(testComponent.focusable.focused).toBe(true);
            expect(document.activeElement).toBe(
                testComponent.focusable.nativeFocusableElement,
            );
        }));
    });

    describe('works for iOS decoy method', () => {
        @Component({
            template: `
                <input tuiAutoFocus />
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestComponentIos {
            @ViewChild(TuiAutoFocusDirective, {read: ElementRef})
            element!: ElementRef<HTMLElement>;
        }

        let fixture: ComponentFixture<TestComponentIos>;
        let testComponent: TestComponentIos;

        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiAutoFocusModule],
                declarations: [TestComponentIos],
                providers: [
                    {
                        provide: TUI_AUTOFOCUS_HANDLER,
                        useClass: TuiIosAutofocusHandler,
                    },
                ],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponentIos);
            testComponent = fixture.componentInstance;
        });

        it('focuses', fakeAsync(() => {
            fixture.detectChanges();
            tick(100);
            expect(tuiIsNativeFocused(testComponent.element.nativeElement)).toBe(true);
        }));
    });

    describe('autoFocus flag is false', () => {
        @Component({
            template: `
                <div
                    tuiAutoFocus
                    tabindex="0"
                    [autoFocus]="autoFocus"
                ></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestComponentWithFocusFlag {
            @ViewChild(TuiAutoFocusDirective, {read: ElementRef})
            element!: ElementRef<HTMLElement>;

            autoFocus = false;
        }

        let fixture: ComponentFixture<TestComponentWithFocusFlag>;
        let testComponent: TestComponentWithFocusFlag;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TuiAutoFocusModule],
                declarations: [TestComponentWithFocusFlag],
            });

            fixture = TestBed.createComponent(TestComponentWithFocusFlag);
            testComponent = fixture.componentInstance;
        });

        it('does not focus element', fakeAsync(() => {
            fixture.detectChanges();
            tick(100);
            expect(tuiIsNativeFocused(testComponent.element.nativeElement)).toBe(false);
        }));
    });
});
