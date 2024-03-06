import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import type {TuiSafeHtml, TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_BASE_HREF, TUI_VERSION, tuiIsString} from '@taiga-ui/cdk';
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

describe('SVG options', () => {
    @Component({
        template: `
            <tui-svg [src]="icon"></tui-svg>
        `,
    })
    class TestComponent {
        @ViewChild(TuiSvgComponent)
        public svgComponent!: TuiSvgComponent;

        public icon = '';
    }

    let fixture: ComponentFixture<TestComponent> | null = null;
    let testComponent: TestComponent | null = null;

    const createComponent: () => void = () => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture?.autoDetectChanges();
    };

    describe('Default behaviour', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
            });
            await TestBed.compileComponents();
            createComponent();
        });

        it('tuiIconMySuperIcon', () => {
            testComponent!.icon = 'tuiIconMySuperIcon';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(false);
            expect(testComponent?.svgComponent.src).toBe('tuiIconMySuperIcon');
            expect(testComponent?.svgComponent.use).toBe(
                `assets/taiga-ui/icons/tuiIconMySuperIcon.svg?v=${TUI_VERSION}#tuiIconMySuperIcon`,
            );
        });
    });

    describe('TUI_ICONS_PATH', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_ICONS_PATH,
                        useValue: tuiIconsPathFactory(
                            'https://taiga-ui.dev/icons/public/',
                        ),
                    },
                ],
            });
            await TestBed.compileComponents();
            createComponent();
        });

        it('tuiIconMySuperIcon', () => {
            testComponent!.icon = 'tuiIconMySuperIcon';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe('tuiIconMySuperIcon');
            expect(testComponent?.svgComponent.use).toBe(
                `https://taiga-ui.dev/icons/public/tuiIconMySuperIcon.svg?v=${TUI_VERSION}#tuiIconMySuperIcon`,
            );
        });
    });

    describe('path uses baseUrl', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_BASE_HREF,
                        useValue: '/my/app/',
                    },
                    tuiSvgOptionsProvider({
                        path: (name, baseHref) =>
                            `${baseHref}assets/taiga-ui/icons/${name}.svg`,
                    }),
                ],
            });
            await TestBed.compileComponents();
            createComponent();
        });

        it('tuiMyIcon', () => {
            testComponent!.icon = 'tuiMyIcon';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(false);
            expect(testComponent?.svgComponent.src).toBe('tuiMyIcon');
            expect(testComponent?.svgComponent.use).toBe(
                '/my/app/assets/taiga-ui/icons/tuiMyIcon.svg',
            );
        });
    });

    describe('TUI_SVG_SRC_PROCESSOR', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_SVG_SRC_PROCESSOR,
                        useFactory:
                            (base: string): TuiStringHandler<string> =>
                            src =>
                                tuiIsString(src) && src.startsWith('tuiIconTds')
                                    ? `${base}/${src}.svg`
                                    : src,
                        deps: [TUI_ICONS_PLACE],
                    },
                ],
            });
            await TestBed.compileComponents();
            createComponent();
        });

        it('tuiIconMySuperIcon should be inside use', () => {
            testComponent!.icon = 'tuiIconMySuperIcon';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(false);
            expect(testComponent?.svgComponent.src).toBe('tuiIconMySuperIcon');
            expect(testComponent?.svgComponent.use).toBe(
                `assets/taiga-ui/icons/tuiIconMySuperIcon.svg?v=${TUI_VERSION}#tuiIconMySuperIcon`,
            );
        });

        it('tuiIconTdsSuperIcon should be inside innerHTML', () => {
            testComponent!.icon = 'tuiIconTdsSuperIcon';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe(
                'assets/taiga-ui/icons/tuiIconTdsSuperIcon.svg',
            );
        });
    });

    describe('tuiSvgOptionsProvider -> srcProcessor', () => {
        beforeEach(async () => {
            const path = 'assets/hello-world/icons';

            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    tuiSvgOptionsProvider({
                        path,
                        srcProcessor: src =>
                            String(src).startsWith('tuiIconTds')
                                ? `${path}/${String(src)}.svg`
                                : src,
                    }),
                ],
            });
            await TestBed.compileComponents();
            createComponent();
        });

        it('tuiIconMySuperIcon should be inside use', () => {
            testComponent!.icon = 'tuiIconMySuperIcon';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(false);
            expect(testComponent?.svgComponent.src).toBe('tuiIconMySuperIcon');
            expect(testComponent?.svgComponent.use).toBe(
                `assets/hello-world/icons/tuiIconMySuperIcon.svg?v=${TUI_VERSION}#tuiIconMySuperIcon`,
            );
        });

        it('tuiIconTdsSuperIcon should be inside innerHTML', () => {
            testComponent!.icon = 'tuiIconTdsSuperIcon';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe(
                'assets/hello-world/icons/tuiIconTdsSuperIcon.svg',
            );
        });
    });

    describe('TUI_SVG_SRC_PROCESSOR + tuiSvgOptionsProvider -> srcProcessor', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_SVG_SRC_PROCESSOR,
                        useFactory:
                            (base: string): TuiStringHandler<string> =>
                            src =>
                                tuiIsString(src) && src.startsWith('tuiIconTds')
                                    ? `${base}/${src}.svg`
                                    : src,
                        deps: [TUI_ICONS_PLACE],
                    },
                    tuiSvgOptionsProvider({
                        srcProcessor: src => {
                            const myCustomPrefix = 'icons8::';

                            return String(src).startsWith(myCustomPrefix)
                                ? `assets/icons/${String(src).replace(
                                      myCustomPrefix,
                                      '',
                                  )}.svg`
                                : src;
                        },
                    }),
                ],
            });
            await TestBed.compileComponents();
            createComponent();
        });

        it('icons8::android', () => {
            testComponent!.icon = 'icons8::android';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe('assets/icons/android.svg');
            expect(testComponent?.svgComponent.use).toBe('#assets/icons/android.svg');
        });

        it('tuiIconTdsSuperIcon and TUI_SVG_SRC_PROCESSOR should be ignored', () => {
            testComponent!.icon = 'tuiIconTdsSuperIcon';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(false);
            expect(testComponent?.svgComponent.src).toBe('tuiIconTdsSuperIcon');
        });
    });

    describe('TUI_SVG_SRC_PROCESSOR -> https prefix', () => {
        beforeEach(async () => {
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
            await TestBed.compileComponents();
            createComponent();
        });

        it('added http protocol prefix by global processor', () => {
            testComponent!.icon = 'google.com/test.svg';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe('https://google.com/test.svg');
        });
    });

    describe('TUI_SVG_SRC_PROCESSOR + tuiSvgOptionsProvider', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_SVG_SRC_PROCESSOR,
                        useValue: (src: string): string => `https://${src}`,
                    },
                    tuiSvgOptionsProvider({path: 'assets/taiga-ui/icons/'}),
                ],
            });
            await TestBed.compileComponents();
            createComponent();
        });

        it('path option always ignored because srcProcessor option override use tag detection', () => {
            testComponent!.icon = 'google.com/test.svg';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe('https://google.com/test.svg');
        });
    });

    describe('multiple source processors', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TuiSvgModule],
                declarations: [TestComponent],
                providers: [
                    tuiSvgOptionsProvider({path: 'assets/default-path-to-icons/'}),
                    tuiSvgSrcInterceptors((src: TuiSafeHtml) =>
                        String(src).startsWith('icons8::')
                            ? `assets/icons/${String(src).replace('icons8::', '')}.svg`
                            : src,
                    ),
                    tuiSvgSrcInterceptors((src: TuiSafeHtml) =>
                        String(src).startsWith('tuiIconTds')
                            ? `assets/design-tokens/${String(src)}.svg`
                            : src,
                    ),
                ],
            });
            await TestBed.compileComponents();
            createComponent();
        });

        it('tuiIconMyDefault', () => {
            testComponent!.icon = 'tuiIconMyDefault';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(false);
            expect(testComponent?.svgComponent.src).toBe('tuiIconMyDefault');
        });

        it('icons8', () => {
            testComponent!.icon = 'icons8::android';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe('assets/icons/android.svg');
        });

        it('tuiIconTdsSuperToken', () => {
            testComponent!.icon = 'tuiIconTdsSuperToken';
            fixture?.detectChanges();

            expect(testComponent?.svgComponent.isInnerHTML).toBe(true);
            expect(testComponent?.svgComponent.src).toBe(
                'assets/design-tokens/tuiIconTdsSuperToken.svg',
            );
        });
    });

    afterEach(() => {
        fixture = null;
        testComponent = null;
    });
});
