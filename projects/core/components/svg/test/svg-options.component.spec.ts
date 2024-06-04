import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import type {TuiSafeHtml} from '@taiga-ui/cdk';
import {TUI_BASE_HREF, TUI_VERSION, tuiIsString} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_ICONS_PLACE,
    tuiIconsPathFactory,
    TuiSvgComponent,
    tuiSvgOptionsProvider,
    tuiSvgSrcInterceptors,
} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('SVG options', () => {
    @Component({
        standalone: true,
        imports: [TuiSvgComponent],
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
                imports: [TestComponent],
                providers: [NG_EVENT_PLUGINS],
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

    describe('path', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TestComponent],
                providers: [
                    NG_EVENT_PLUGINS,
                    tuiSvgOptionsProvider({
                        path: tuiIconsPathFactory('https://taiga-ui.dev/icons/public/'),
                    }),
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
                imports: [TestComponent],
                providers: [
                    NG_EVENT_PLUGINS,
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

    describe('srcProcessor', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TestComponent],
                providers: [
                    NG_EVENT_PLUGINS,
                    tuiSvgOptionsProvider({
                        srcProcessor: src =>
                            tuiIsString(src) && src.startsWith('tuiIconTds')
                                ? `${TUI_DEFAULT_ICONS_PLACE}/${src}.svg`
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
                imports: [TestComponent],
                providers: [
                    NG_EVENT_PLUGINS,
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
                imports: [TestComponent],
                providers: [
                    NG_EVENT_PLUGINS,
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

    describe('srcProcessor -> https prefix', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TestComponent],
                providers: [
                    NG_EVENT_PLUGINS,
                    tuiSvgOptionsProvider({
                        srcProcessor: src => `https://${src}`,
                    }),
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
                imports: [TestComponent],
                providers: [
                    NG_EVENT_PLUGINS,
                    tuiSvgOptionsProvider({
                        path: 'assets/taiga-ui/icons/',
                        srcProcessor: src => `https://${src}`,
                    }),
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
                imports: [TestComponent],
                providers: [
                    NG_EVENT_PLUGINS,
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
