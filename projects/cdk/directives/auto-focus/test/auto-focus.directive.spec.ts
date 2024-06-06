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
import type {ComponentFixture} from '@angular/core/testing';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {WINDOW} from '@ng-web-apis/common';
import type {TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import {
    TUI_AUTOFOCUS_HANDLER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiAsFocusableItemAccessor,
    TuiAutoFocusDirective,
    TuiIosAutofocusHandler,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import {EMPTY} from 'rxjs';

describe('TuiAutoFocus directive', () => {
    describe('works for focusable HTML element', () => {
        @Component({
            standalone: true,
            imports: [TuiAutoFocusDirective],
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
                imports: [TestComponentWithDiv],
                providers: [NG_EVENT_PLUGINS],
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
            standalone: true,
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
            standalone: true,
            imports: [TestFocusableComponent, TuiAutoFocusDirective],
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
                imports: [TestComponentWithTuiButton, TestFocusableComponent],
                providers: [NG_EVENT_PLUGINS],
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
            standalone: true,
            imports: [TuiAutoFocusDirective],
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
                imports: [TestComponentIos],
                providers: [
                    NG_EVENT_PLUGINS,
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
            standalone: true,
            imports: [TuiAutoFocusDirective],
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
                imports: [TestComponentWithFocusFlag],
                providers: [NG_EVENT_PLUGINS],
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
