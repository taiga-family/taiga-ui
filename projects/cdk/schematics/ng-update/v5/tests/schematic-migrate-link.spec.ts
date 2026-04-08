import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update link pseudo', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: `
            import {TuiLink} from '@taiga-ui/core';

            @Component({
                templateUrl: './test.html',
                imports: [TuiLink],
            })
            export class TestComponent {}
        `,
    });

    it(
        'migrates [pseudo]="true" to appearance=""',
        migrate({
            template: /* HTML */ `
                <a
                    href="/some-link"
                    tuiLink
                    [pseudo]="true"
                >
                    Pseudo link
                </a>
            `,
        }),
    );

    it(
        'migrates pseudo without binding',
        migrate({
            template: /* HTML */ `
                <a
                    href="/some-link"
                    pseudo
                    tuiLink
                >
                    Static pseudo link
                </a>
            `,
        }),
    );

    it(
        'migrates button with tuiLink and [pseudo]',
        migrate({
            template: /* HTML */ `
                <button
                    tuiLink
                    type="button"
                    [pseudo]="true"
                >
                    Button pseudo link
                </button>
            `,
        }),
    );

    it(
        'adds text-decoration-line underline for non-empty appearance',
        migrate({
            template: /* HTML */ `
                <a
                    appearance="custom"
                    href="/link"
                    tuiLink
                    [pseudo]="true"
                >
                    Has custom appearance
                </a>
            `,
        }),
    );

    it(
        'adds text-decoration-style dashed for empty appearance',
        migrate({
            template: /* HTML */ `
                <a
                    appearance=""
                    href="/link"
                    tuiLink
                    [pseudo]="true"
                >
                    Has empty appearance
                </a>
            `,
        }),
    );

    it(
        'removes [pseudo]="false" without adding styles',
        migrate({
            template: /* HTML */ `
                <a
                    href="https://example.com"
                    rel="noreferrer"
                    target="_blank"
                    tuiLink
                    [pseudo]="false"
                >
                    External link
                </a>
            `,
        }),
    );

    it(
        'does not touch link without pseudo',
        migrate({
            template: /* HTML */ `
                <a
                    href="/link"
                    tuiLink
                >
                    Normal link
                </a>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
