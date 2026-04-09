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
        'migrates [pseudo]="true" to [style.text-decoration-line]',
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
        'removes pseudo without binding',
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
        'migrates [pseudo]="true" with appearance',
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
        'migrates [pseudo]="true" with empty appearance to dashed style',
        migrate({
            template: /* HTML */ `
                <a
                    appearance=""
                    href="/link"
                    tuiLink
                    [pseudo]="true"
                >
                    Inherited link
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
        'migrates dynamic [pseudo] to conditional expression',
        migrate({
            template: /* HTML */ `
                <a
                    href="/link"
                    tuiLink
                    [pseudo]="isPseudo"
                >
                    Dynamic pseudo
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
