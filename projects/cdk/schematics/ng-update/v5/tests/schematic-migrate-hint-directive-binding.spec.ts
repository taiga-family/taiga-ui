import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tuiDirectiveBinding hint property names', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames TuiHintDirective binding from tuiHint to content',
        migrate({
            component: /* TypeScript */ `
                import {tuiDirectiveBinding} from '@taiga-ui/cdk';
                import {TuiHintDirective} from '@taiga-ui/core';

                export class Test {
                    protected readonly hint = tuiDirectiveBinding(
                        TuiHintDirective,
                        'tuiHint',
                        this.texts,
                    );
                }
            `,
        }),
    );

    it(
        'renames TuiHintManual binding from tuiHintManual to visible',
        migrate({
            component: /* TypeScript */ `
                import {tuiDirectiveBinding} from '@taiga-ui/cdk';
                import {TuiHintManual} from '@taiga-ui/core';

                export class Test {
                    protected readonly manual = tuiDirectiveBinding(
                        TuiHintManual,
                        'tuiHintManual',
                        null,
                    );
                }
            `,
        }),
    );

    it(
        'leaves unrelated tuiDirectiveBinding calls untouched',
        migrate({
            component: /* TypeScript */ `
                import {tuiDirectiveBinding} from '@taiga-ui/cdk';
                import {TuiHintDirective} from '@taiga-ui/core';

                export class Test {
                    protected readonly hint = tuiDirectiveBinding(
                        TuiHintDirective,
                        'tuiHintAppearance',
                        'error',
                    );
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
