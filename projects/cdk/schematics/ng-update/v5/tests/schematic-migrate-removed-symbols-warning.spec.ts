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
        'adds TODO comment for TuiImgLazyLoading import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiImgLazyLoading} from '@taiga-ui/kit';

                @Component({
                    imports: [TuiImgLazyLoading],
                    template: '<img loading="lazy" src="picture.webp" alt="" />',
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO comment for TuiLazyLoadingService import',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TuiLazyLoadingService} from '@taiga-ui/kit';

                @Component({})
                export class TestComponent {
                    protected readonly src = inject(TuiLazyLoadingService);
                }
            `,
        }),
    );

    it(
        'adds TODO comment for TuiClickOutside import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiClickOutside} from '@taiga-ui/cdk';

                @Component({
                    imports: [TuiClickOutside],
                    template: '<div (tuiClickOutside)="onClickOutside()"></div>',
                })
                export class TestComponent {
                    protected onClickOutside(): void {}
                }
            `,
        }),
    );

    it(
        'adds TODO comment for TuiFor import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiFor} from '@taiga-ui/cdk';

                @Component({
                    imports: [TuiFor],
                    template:
                        '<span *ngFor="let item of items; empty: empty">{{item}}</span><ng-template #empty>No items</ng-template>',
                })
                export class TestComponent {
                    protected readonly items: string[] = [];
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
