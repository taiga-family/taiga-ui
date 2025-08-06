import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    NgZone,
    Renderer2,
    ViewChild,
} from '@angular/core';
import {type ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {WA_WINDOW} from '@ng-web-apis/common';
import {
    TUI_AUTOFOCUS_HANDLER,
    TUI_AUTOFOCUS_OPTIONS,
    TuiAutoFocus,
    type TuiAutofocusOptions,
    TuiIosAutofocusHandler,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

describe('TuiAutoFocus directive', () => {
    describe('works for focusable HTML element', () => {
        @Component({
            standalone: true,
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
            @ViewChild(TuiAutoFocus, {read: ElementRef})
            public element!: ElementRef<HTMLElement>;
        }

        let fixture: ComponentFixture<TestWithDiv>;
        let testComponent: TestWithDiv;

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TestWithDiv],
                providers: [NG_EVENT_PLUGINS],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(TestWithDiv);
            testComponent = fixture.componentInstance;
        });

        it('focuses', fakeAsync(() => {
            fixture.detectChanges();
            tick(100);

            expect(tuiIsNativeFocused(testComponent.element.nativeElement)).toBe(true);
        }));
    });

    describe('works for iOS decoy method', () => {
        @Component({
            standalone: true,
            imports: [TuiAutoFocus],
            template: `
                <input tuiAutoFocus />
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TestIos {
            @ViewChild(TuiAutoFocus, {read: ElementRef})
            public element!: ElementRef<HTMLElement>;
        }

        let fixture: ComponentFixture<TestIos>;
        let testComponent: TestIos;

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TestIos],
                providers: [
                    NG_EVENT_PLUGINS,
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

            expect(tuiIsNativeFocused(testComponent.element.nativeElement)).toBe(true);
        }));
    });

    describe('autoFocus flag is false', () => {
        @Component({
            standalone: true,
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
            @ViewChild(TuiAutoFocus, {read: ElementRef})
            public element!: ElementRef<HTMLElement>;

            public autoFocus = false;
        }

        let fixture: ComponentFixture<TestWithFocusFlag>;
        let testComponent: TestWithFocusFlag;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [TestWithFocusFlag],
                providers: [NG_EVENT_PLUGINS],
            });

            fixture = TestBed.createComponent(TestWithFocusFlag);
            testComponent = fixture.componentInstance;
        });

        it('does not focus element', fakeAsync(() => {
            fixture.detectChanges();
            tick(100);

            expect(tuiIsNativeFocused(testComponent.element.nativeElement)).toBe(false);
        }));
    });
});
