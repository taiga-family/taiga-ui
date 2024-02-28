import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    NgZone,
    Optional,
    Renderer2,
    Self,
    ViewChild,
} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {WINDOW} from '@ng-web-apis/common';
import {
    TUI_AUTOFOCUS_HANDLER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiAsFocusableItemAccessor,
    TuiAutoFocusDirective,
    TuiAutoFocusModule,
    TuiFocusableElementAccessor,
    TuiIosAutofocusHandler,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {EMPTY} from 'rxjs';

describe('TuiAutoFocus directive', () => {
    describe('works for focusable HTML element', () => {
        @Component({
            template: `
                <div
                    tabindex="0"
                    tuiAutoFocus
                ></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestComponentWithDiv {
            @ViewChild(TuiAutoFocusDirective, {read: ElementRef})
            public element!: ElementRef<HTMLElement>;
        }

        let fixture: ComponentFixture<TestComponentWithDiv>;
        let testComponent: TestComponentWithDiv;

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TuiAutoFocusModule],
                declarations: [TestComponentWithDiv],
            });
            await TestBed.compileComponents();
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
            selector: 'focusable-component',
            template: `
                <p>
                    <input
                        #input
                        value="test"
                    />
                </p>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
            providers: [tuiAsFocusableItemAccessor(TestFocusableComponent)],
        })
        class TestFocusableComponent implements TuiFocusableElementAccessor {
            @ViewChild('input')
            public input?: ElementRef<HTMLInputElement>;

            public focusedChange = EMPTY;

            public get nativeFocusableElement(): HTMLInputElement | null {
                return this.input?.nativeElement ?? null;
            }

            public get focused(): boolean {
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
            public focusable!: TestFocusableComponent;
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
            public element!: ElementRef<HTMLElement>;
        }

        let fixture: ComponentFixture<TestComponentIos>;
        let testComponent: TestComponentIos;

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TuiAutoFocusModule],
                declarations: [TestComponentIos],
                providers: [
                    {
                        provide: TUI_AUTOFOCUS_HANDLER,
                        useClass: TuiIosAutofocusHandler,
                        useFactory: (
                            focusable: TuiFocusableElementAccessor | null,
                            el: ElementRef<HTMLElement>,
                            renderer: Renderer2,
                            zone: NgZone,
                            win: Window,
                        ) =>
                            new TuiIosAutofocusHandler(
                                focusable,
                                el,
                                renderer,
                                zone,
                                win,
                            ),
                        deps: [
                            [new Optional(), new Self(), TUI_FOCUSABLE_ITEM_ACCESSOR],
                            ElementRef,
                            Renderer2,
                            NgZone,
                            WINDOW,
                        ],
                    },
                ],
            });
            await TestBed.compileComponents();
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
                    tabindex="0"
                    [tuiAutoFocus]="autoFocus"
                ></div>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestComponentWithFocusFlag {
            @ViewChild(TuiAutoFocusDirective, {read: ElementRef})
            public element!: ElementRef<HTMLElement>;

            public autoFocus = false;
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
