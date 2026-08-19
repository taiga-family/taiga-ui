import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update breakpoint service', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrates TuiBreakpointService inject usage to TUI_BREAKPOINT observable wrapper',
        migrate({
            component: /* TypeScript */ `
                import {AsyncPipe, NgIf} from '@angular/common';
                import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
                import {
                    TuiBreakpointService,
                    TuiButton,
                    type TuiSizeL,
                } from '@taiga-ui/core';
                import {TuiBlockStatus} from '@taiga-ui/layout';
                import {map, type Observable} from 'rxjs';

                @Component({
                    standalone: true,
                    exportAs: 'Example2',
                    imports: [AsyncPipe, NgIf, TuiBlockStatus, TuiButton],
                    templateUrl: './test.html',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                })
                export default class Example {
                    protected readonly breakpointService = inject(TuiBreakpointService);

                    protected size$: Observable<TuiSizeL> = this.breakpointService.pipe(
                        map((key) => (key === 'mobile' ? 'm' : 'l')),
                    );
                }
            `,
        }),
    );

    it(
        'migrates inline inject(TuiBreakpointService).pipe(...) usage',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TuiBreakpointService} from '@taiga-ui/core';
                import {map} from 'rxjs';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    protected readonly s$ = inject(TuiBreakpointService).pipe(
                        map((breakpoint) => breakpoint === 'mobile'),
                    );
                }
            `,
        }),
    );

    it(
        'migrates typed constructor parameter to a TUI_BREAKPOINT field',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiBreakpointService} from '@taiga-ui/core';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    constructor(
                        private readonly breakpointService: TuiBreakpointService,
                    ) {}
                }
            `,
        }),
    );

    it(
        'migrates multiple inject(TuiBreakpointService) usages in one file',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TuiBreakpointService} from '@taiga-ui/core';
                import {map} from 'rxjs';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    protected readonly a$ = inject(TuiBreakpointService).pipe(
                        map((breakpoint) => breakpoint === 'mobile'),
                    );

                    protected readonly b$ = inject(TuiBreakpointService).pipe(
                        map((breakpoint) => breakpoint === 'desktop'),
                    );
                }
            `,
        }),
    );

    it(
        'migrates multiple @Inject(TuiBreakpointService) constructor params to fields',
        migrate({
            component: /* TypeScript */ `
                import {Component, Inject} from '@angular/core';
                import {
                    TuiBreakpointMediaKey,
                    TuiBreakpointService,
                } from '@taiga-ui/core';
                import {type Observable} from 'rxjs';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    constructor(
                        @Inject(TuiBreakpointService)
                        private readonly breakpoint$: TuiBreakpointService,
                        @Inject(TuiBreakpointService)
                        private readonly media$: Observable<TuiBreakpointMediaKey>,
                    ) {}
                }
            `,
        }),
    );

    it(
        'adds a removed-service TODO for unsupported non-parameter type usage',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiBreakpointService} from '@taiga-ui/core';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    protected service!: TuiBreakpointService;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
