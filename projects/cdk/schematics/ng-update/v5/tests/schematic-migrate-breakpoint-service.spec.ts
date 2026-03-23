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
            component: `
                import {AsyncPipe, NgIf} from '@angular/common';
                import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
                import {TuiBreakpointService, TuiButton, type TuiSizeL} from '@taiga-ui/core';
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
            component: `
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
        'adds TODO comment for unsupported constructor injection usage',
        migrate({
            component: `
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

    afterEach(() => resetActiveProject());
});
