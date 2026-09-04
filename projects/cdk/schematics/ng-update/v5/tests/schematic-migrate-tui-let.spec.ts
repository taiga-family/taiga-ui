import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tuiLet', () => {
    const migration = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: /* TypeScript */ `
            import {Component} from '@angular/core';
            import {TuiLet} from '@taiga-ui/cdk';

            @Component({
                standalone: true,
                templateUrl: './test.html',
                imports: [TuiLet],
            })
            export class Test {
                readonly value = 'foo';
            }
        `,
    });

    it(
        'migrates simple structural directive',
        migration({
            template: /* HTML */ `
                <test *tuiLet="value as val">{{ val }}</test>
            `,
        }),
    );

    it(
        'migrates nested case with additional attributes',
        migration({
            template: /* HTML */ `
                <div>
                    <test
                        *tuiLet="value as val2"
                        foo
                    >
                        {{ val2 }}
                    </test>
                </div>
            `,
        }),
    );

    it(
        'migrates ng-container with tuiLet',
        migration({
            template: /* HTML */ `
                <ng-container *tuiLet="value as val"></ng-container>
                <div>
                    <ng-container *tuiLet="value as val2"></ng-container>
                </div>
                <ng-container *tuiLet="value as val3">{{ val3 }}</ng-container>
            `,
        }),
    );

    it(
        'migrates nested ng-container with tuiLet',
        migration({
            template: /* HTML */ `
                <ng-container
                    *tuiLet="showRequisitesButton$ | async as showRequisitesButton"
                >
                    <ng-container
                        *tuiLet="companyRequisites$ | async as companyRequisites"
                    >
                        <tui-panel [titleContent]="companyContent">
                            <ng-template #companyContent>
                                <label>Label</label>
                            </ng-template>
                        </tui-panel>

                        <div>Hello world</div>
                    </ng-container>
                </ng-container>
            `,
        }),
    );

    it(
        'renames the @let when the alias repeats an identifier in the expression',
        migration({
            template: /* HTML */ `
                <test *tuiLet="isOrderCompleted() as isOrderCompleted">
                    {{ isOrderCompleted }}
                    <span [class.done]="isOrderCompleted">done</span>
                </test>
            `,
        }),
    );

    it(
        'keeps the alias when only an observable (foo$) shares its stem',
        migration({
            template: /* HTML */ `
                <test *tuiLet="isOrderCompleted$ | async as isOrderCompleted">
                    {{ isOrderCompleted }}
                </test>
            `,
        }),
    );

    it(
        'migrates nested anchors without crashing on reconstructed clones',
        migration({
            template: /* HTML */ `
                <a *tuiLet="value as val">
                    <p>
                        <a>{{ val }}</a>
                    </p>
                </a>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
