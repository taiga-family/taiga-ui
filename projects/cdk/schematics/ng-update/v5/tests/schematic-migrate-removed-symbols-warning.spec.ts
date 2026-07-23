import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update removed symbols warnings', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment for TuiWrapperDirective import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiWrapperDirective} from '@taiga-ui/legacy';

                @Component({
                    imports: [TuiWrapperDirective],
                    template: '<div tuiWrapper [disabled]="true"></div>',
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO comment for TuiStaticRequestService import',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TuiStaticRequestService} from '@taiga-ui/legacy';

                @Component({})
                export class TestComponent {
                    private readonly staticRequest = inject(TuiStaticRequestService);

                    protected load(url: string) {
                        return this.staticRequest.request(url);
                    }
                }
            `,
        }),
    );

    it(
        'adds TODO comment for TUI_MONTH_FORMATTER import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit';
                import {TuiMonth} from '@taiga-ui/cdk';
                import {of} from 'rxjs';

                @Component({
                    providers: [
                        {
                            provide: TUI_MONTH_FORMATTER,
                            useValue: (month: TuiMonth) => of(\`\${month.formattedYear}/\${month.month + 1}\`),
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO comment for TuiKeysPipe import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiKeysPipe} from '@taiga-ui/cdk';

                @Component({
                    imports: [TuiKeysPipe],
                    template: '<span>{{ (dictionary | tuiKeys).length }}</span>',
                })
                export class TestComponent {
                    protected readonly dictionary = {a: 1, b: 2};
                }
            `,
        }),
    );

    it(
        'adds TODO comment for TuiReplacePipe import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiReplacePipe} from '@taiga-ui/cdk';

                @Component({
                    imports: [TuiReplacePipe],
                    template: '<span>{{ text | tuiReplace: "-" : " " }}</span>',
                })
                export class TestComponent {
                    protected readonly text = 'a-b-c';
                }
            `,
        }),
    );

    it(
        'adds TODO comment for TuiToArrayPipe import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiToArrayPipe} from '@taiga-ui/cdk';

                @Component({
                    imports: [TuiToArrayPipe],
                    template: '<span>{{ (set | tuiToArray).length }}</span>',
                })
                export class TestComponent {
                    protected readonly set = new Set([1, 2, 3]);
                }
            `,
        }),
    );

    it(
        'adds TODO comment for TuiIsPresentPipe import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiIsPresentPipe} from '@taiga-ui/cdk';

                @Component({
                    imports: [TuiIsPresentPipe],
                    template: '@if (value | tuiIsPresent) { {{value}} }',
                })
                export class TestComponent {
                    protected readonly value: number | null = 1;
                }
            `,
        }),
    );

    it(
        'adds TODO comment for TuiAnimationPipe import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiAnimationPipe} from '@taiga-ui/cdk';

                @Component({
                    imports: [TuiAnimationPipe],
                    template: '<div [@animation]="options | tuiAnimation"></div>',
                })
                export class TestComponent {
                    protected readonly options = {value: 'active'};
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
