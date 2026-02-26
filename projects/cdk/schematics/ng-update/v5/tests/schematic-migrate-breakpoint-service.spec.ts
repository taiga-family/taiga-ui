import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update breakpoint service', () => {
    async function migrate(source: string): Promise<string> {
        const {component} = await runMigration({
            collection,
            component: source,
        });

        return component;
    }

    it('migrates TuiBreakpointService inject usage to TUI_BREAKPOINT observable wrapper', async () => {
        const result = await migrate(`
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
        `);

        expect(result).toEqual(
            [
                'import { toObservable } from "@angular/core/rxjs-interop";',
                '',
                "            import {AsyncPipe, NgIf} from '@angular/common';",
                "            import {ChangeDetectionStrategy, Component, inject} from '@angular/core';",
                "            import { TuiButton, type TuiSizeL, TUI_BREAKPOINT } from '@taiga-ui/core';",
                "            import {TuiBlockStatus} from '@taiga-ui/layout';",
                "            import {map, type Observable} from 'rxjs';",
                '',
                '            @Component({',
                '                standalone: true,',
                "                exportAs: 'Example2',",
                '                imports: [AsyncPipe, NgIf, TuiBlockStatus, TuiButton],',
                "                templateUrl: './test.html',",
                '                changeDetection: ChangeDetectionStrategy.OnPush,',
                '            })',
                '            export default class Example {',
                '                protected readonly breakpointService = toObservable(inject(TUI_BREAKPOINT));',
                '',
                '                protected size$: Observable<TuiSizeL> = this.breakpointService.pipe(',
                "                    map((key) => (key === 'mobile' ? 'm' : 'l')),",
                '                );',
                '            }',
                '        ',
            ].join('\n'),
        );
    });

    it('migrates inline inject(TuiBreakpointService).pipe(...) usage', async () => {
        const result = await migrate(`
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
        `);

        expect(result).toEqual(
            [
                'import { toObservable } from "@angular/core/rxjs-interop";',
                '',
                "            import {Component, inject} from '@angular/core';",
                "            import { TUI_BREAKPOINT } from '@taiga-ui/core';",
                "            import {map} from 'rxjs';",
                '',
                '            @Component({',
                "                templateUrl: './test.html',",
                '            })',
                '            export class TestComponent {',
                '                protected readonly s$ = toObservable(inject(TUI_BREAKPOINT)).pipe(',
                "                    map((breakpoint) => breakpoint === 'mobile'),",
                '                );',
                '            }',
                '        ',
            ].join('\n'),
        );
    });

    it('adds TODO comment for unsupported constructor injection usage', async () => {
        const result = await migrate(`
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
        `);

        expect(result).toEqual(
            [
                '',
                "            import {Component} from '@angular/core';",
                "            import {TuiBreakpointService} from '@taiga-ui/core';",
                '',
                '            @Component({',
                "                templateUrl: './test.html',",
                '            })',
                '            export class TestComponent {',
                '                constructor(',
                '// TODO: (Taiga UI migration) TuiBreakpointService is deprecated. Use TUI_BREAKPOINT (signal token), wrap with toObservable(...) for Observable-based code if needed',
                '                    private readonly breakpointService: TuiBreakpointService,',
                '                ) {}',
                '            }',
                '        ',
            ].join('\n'),
        );
    });

    afterEach(() => resetActiveProject());
});
