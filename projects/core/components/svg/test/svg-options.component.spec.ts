import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TUI_VERSION, tuiIsString, TuiSafeHtml, TuiStringHandler} from '@taiga-ui/cdk';
import {
    TUI_ICONS_PATH,
    TUI_ICONS_PLACE,
    TUI_SVG_SRC_PROCESSOR,
    tuiIconsPathFactory,
    TuiSvgComponent,
    TuiSvgModule,
    tuiSvgOptionsProvider,
    tuiSvgSrcInterceptors,
} from '@taiga-ui/core';
import {configureTestSuite} from '@taiga-ui/testing';

describe(`SVG options`, () => {
    @Component({
        template: `
            <tui-svg [src]="icon"></tui-svg>
        `,
    })
    class TestComponent {
        @ViewChild(TuiSvgComponent)
        svgComponent!: TuiSvgComponent;

        icon = ``;
    }

    let fixture: ComponentFixture<TestComponent> | null = null;
    let testComponent: TestComponent | null = null;

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture?.autoDetectChanges();
    });

    describe(`Default behaviour`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
            });
        });

        it(`tuiIconMySuperIcon`, () => {
            testComponent!.icon = `tuiIconMySuperIcon`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(false);
            expect(testComponent?.svgComponent.src).toBe(`tuiIconMySuperIcon`);
            expect(testComponent?.svgComponent.use).toBe(
                `assets/taiga-ui/icons/tuiIconMySuperIcon.svg?v=${TUI_VERSION}#tuiIconMySuperIcon`,
            );
        });
    });

    describe(`TUI_ICONS_PATH`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_ICONS_PATH,
                        useValue: tuiIconsPathFactory(
                            `https://taiga-ui.dev/icons/public/`,
                        ),
                    },
                ],
            });
        });

        it(`tuiIconMySuperIcon`, () => {
            testComponent!.icon = `tuiIconMySuperIcon`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe(`tuiIconMySuperIcon`);
            expect(testComponent?.svgComponent.use).toBe(
                `https://taiga-ui.dev/icons/public/tuiIconMySuperIcon.svg?v=${TUI_VERSION}#tuiIconMySuperIcon`,
            );
        });
    });

    describe(`TUI_SVG_SRC_PROCESSOR`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_SVG_SRC_PROCESSOR,
                        useFactory:
                            (base: string): TuiStringHandler<string> =>
                            src =>
                                tuiIsString(src) && src.startsWith(`tuiIconTds`)
                                    ? `${base}/${src}.svg`
                                    : src,
                        deps: [TUI_ICONS_PLACE],
                    },
                ],
            });
        });

        it(`tuiIconMySuperIcon should be inside use`, () => {
            testComponent!.icon = `tuiIconMySuperIcon`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(false);
            expect(testComponent?.svgComponent.src).toBe(`tuiIconMySuperIcon`);
            expect(testComponent?.svgComponent.use).toBe(
                `assets/taiga-ui/icons/tuiIconMySuperIcon.svg?v=${TUI_VERSION}#tuiIconMySuperIcon`,
            );
        });

        it(`tuiIconTdsSuperIcon should be inside innerHTML`, () => {
            testComponent!.icon = `tuiIconTdsSuperIcon`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe(
                `assets/taiga-ui/icons/tuiIconTdsSuperIcon.svg`,
            );
        });
    });

    describe(`tuiSvgOptionsProvider -> srcProcessor`, () => {
        configureTestSuite(() => {
            const path = `assets/hello-world/icons`;

            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    tuiSvgOptionsProvider({
                        path,
                        srcProcessor: src =>
                            String(src).startsWith(`tuiIconTds`)
                                ? `${path}/${String(src)}.svg`
                                : src,
                    }),
                ],
            });
        });

        it(`tuiIconMySuperIcon should be inside use`, () => {
            testComponent!.icon = `tuiIconMySuperIcon`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(false);
            expect(testComponent?.svgComponent.src).toBe(`tuiIconMySuperIcon`);
            expect(testComponent?.svgComponent.use).toBe(
                `assets/hello-world/icons/tuiIconMySuperIcon.svg?v=${TUI_VERSION}#tuiIconMySuperIcon`,
            );
        });

        it(`tuiIconTdsSuperIcon should be inside innerHTML`, () => {
            testComponent!.icon = `tuiIconTdsSuperIcon`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe(
                `assets/hello-world/icons/tuiIconTdsSuperIcon.svg`,
            );
        });
    });

    describe(`TUI_SVG_SRC_PROCESSOR + tuiSvgOptionsProvider -> srcProcessor`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_SVG_SRC_PROCESSOR,
                        useFactory:
                            (base: string): TuiStringHandler<string> =>
                            src =>
                                tuiIsString(src) && src.startsWith(`tuiIconTds`)
                                    ? `${base}/${src}.svg`
                                    : src,
                        deps: [TUI_ICONS_PLACE],
                    },
                    tuiSvgOptionsProvider({
                        srcProcessor: src => {
                            const myCustomPrefix = `icons8::`;

                            return String(src).startsWith(myCustomPrefix)
                                ? `assets/icons8/${String(src).replace(
                                      myCustomPrefix,
                                      ``,
                                  )}.svg`
                                : src;
                        },
                    }),
                ],
            });
        });

        it(`icons8::android`, () => {
            testComponent!.icon = `icons8::android`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe(`assets/icons8/android.svg`);
            expect(testComponent?.svgComponent.use).toBe(`#assets/icons8/android.svg`);
        });

        it(`tuiIconTdsSuperIcon and TUI_SVG_SRC_PROCESSOR should be ignored`, () => {
            testComponent!.icon = `tuiIconTdsSuperIcon`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(false);
            expect(testComponent?.svgComponent.src).toBe(`tuiIconTdsSuperIcon`);
        });
    });

    describe(`TUI_SVG_SRC_PROCESSOR -> https prefix`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_SVG_SRC_PROCESSOR,
                        useValue: (src: string): string => `https://${src}`,
                    },
                ],
            });
        });

        it(`added http protocol prefix by global processor`, () => {
            testComponent!.icon = `google.com/test.svg`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe(`https://google.com/test.svg`);
        });
    });

    describe(`TUI_SVG_SRC_PROCESSOR + tuiSvgOptionsProvider`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_SVG_SRC_PROCESSOR,
                        useValue: (src: string): string => `https://${src}`,
                    },
                    tuiSvgOptionsProvider({path: `assets/taiga-ui/icons/`}),
                ],
            });
        });

        it(`path option always ignored because srcProcessor option override use tag detection`, () => {
            testComponent!.icon = `google.com/test.svg`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe(`https://google.com/test.svg`);
        });
    });

    describe(`multiple source processors`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    tuiSvgOptionsProvider({path: `assets/default-path-to-icons/`}),
                    tuiSvgSrcInterceptors((src: TuiSafeHtml) =>
                        String(src).startsWith(`icons8::`)
                            ? `assets/icons8/${String(src).replace(`icons8::`, ``)}.svg`
                            : src,
                    ),
                    tuiSvgSrcInterceptors((src: TuiSafeHtml) =>
                        String(src).startsWith(`tuiIconTds`)
                            ? `assets/design-tokens/${String(src)}.svg`
                            : src,
                    ),
                ],
            });
        });

        it(`tuiIconMyDefault`, () => {
            testComponent!.icon = `tuiIconMyDefault`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(false);
            expect(testComponent?.svgComponent.src).toBe(`tuiIconMyDefault`);
        });

        it(`icons8`, () => {
            testComponent!.icon = `icons8::android`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe(`assets/icons8/android.svg`);
        });

        it(`tuiIconTdsSuperToken`, () => {
            testComponent!.icon = `tuiIconTdsSuperToken`;
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe(
                `assets/design-tokens/tuiIconTdsSuperToken.svg`,
            );
        });
    });

    afterEach(() => {
        fixture = null;
        testComponent = null;
    });
});
