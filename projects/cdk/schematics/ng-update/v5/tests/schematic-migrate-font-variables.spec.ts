import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update font variables', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'should migrate heading and text font variables',
        migrate({
            template: /* HTML */ `
                <div>
                    <p style="font: var(--tui-font-text)"></p>
                    <p style="font: var(--tui-font-heading-1)"></p>
                    <p style="font: var(--tui-font-heading-2)"></p>
                    <p style="font: var(--tui-font-heading-3)"></p>
                    <p style="font: var(--tui-font-heading-4)"></p>
                    <p style="font: var(--tui-font-heading-5)"></p>
                    <p style="font: var(--tui-font-heading-6)"></p>

                    <span style="font: var(--tui-font-text-xl)"></span>
                    <span style="font: var(--tui-font-text-l)"></span>
                    <span style="font: var(--tui-font-text-m)"></span>
                    <span style="font: var(--tui-font-text-s)"></span>
                    <span style="font: var(--tui-font-text-xs)"></span>

                    <span style="font: var(--tui-font-text-ui-l)"></span>
                    <span style="font: var(--tui-font-text-ui-m)"></span>
                    <span style="font: var(--tui-font-text-ui-s)"></span>
                    <span style="font: var(--tui-font-text-ui-xs)"></span>

                    <p style="font: var(--tui-font-family-text)"></p>
                    <p style="font: var(--tui-font-family-display)"></p>
                    <p style="font: var(--tui-font-heading-h1)"></p>
                    <p style="font: var(--tui-font-heading-h2)"></p>
                    <p style="font: var(--tui-font-heading-h3)"></p>
                    <p style="font: var(--tui-font-heading-h3)"></p>
                    <p style="font: var(--tui-font-heading-h4)"></p>
                    <p style="font: var(--tui-font-heading-h5)"></p>
                    <p style="font: var(--tui-font-heading-h6)"></p>
                    <span style="font: var(--tui-font-text-l)"></span>
                    <span style="font: var(--tui-font-text-m)"></span>
                    <span style="font: var(--tui-font-text-s)"></span>
                    <span style="font: var(--tui-font-text-xs)"></span>
                    <span style="font: var(--tui-font-ui-l)"></span>
                    <span style="font: var(--tui-font-ui-m)"></span>
                    <span style="font: var(--tui-font-ui-s)"></span>
                    <span style="font: var(--tui-font-ui-xs)"></span>
                    <span style="font: var(--tui-font-ui-2xs)"></span>
                </div>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
