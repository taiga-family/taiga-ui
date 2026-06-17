import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tuiInputCardOptionsProvider warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment for tuiInputCardOptionsProvider and TUI_INPUT_CARD_OPTIONS imports',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {
                    TUI_INPUT_CARD_OPTIONS,
                    tuiInputCardOptionsProvider,
                } from '@taiga-ui/addon-commerce';

                @Component({
                    providers: [tuiInputCardOptionsProvider({autocomplete: true})],
                })
                export class TestComponent {
                    protected readonly options = inject(TUI_INPUT_CARD_OPTIONS);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
