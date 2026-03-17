import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiTextfield to TuiInput', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    describe('template migration', () => {
        it(
            'should rename tuiTextfield to tuiInput',
            migrate({template: '<input tuiTextfield />'}),
        );

        it(
            'should rename tuiTextfield inside tui-textfield tag',
            migrate({template: '<tui-textfield><input tuiTextfield /></tui-textfield>'}),
        );
    });

    describe('identifier migration', () => {
        it(
            'should rename TuiTextfield to TuiInput in imports and usages',
            migrate({
                component: `
                    import {TuiTextfield} from '@taiga-ui/core';

                    @Component({
                        standalone: true,
                        imports: [TuiTextfield],
                    })
                    export class TestComponent {}
                `,
            }),
        );
    });

    afterEach(() => resetActiveProject());
});
