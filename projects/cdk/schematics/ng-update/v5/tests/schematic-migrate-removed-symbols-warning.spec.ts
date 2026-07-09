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

    afterEach(() => resetActiveProject());
});
