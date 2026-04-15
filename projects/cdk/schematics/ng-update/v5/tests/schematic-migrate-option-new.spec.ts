import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiOptionNew', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'removes new attribute from button with tuiOption',
        migrate({
            template: /* HTML */ `
                <button
                    new
                    tuiOption
                >
                    Option
                </button>
            `,
        }),
    );

    it(
        'removes new attribute from button with [tuiOption]',
        migrate({
            template: /* HTML */ `
                <button
                    new
                    [tuiOption]="value"
                >
                    Option
                </button>
            `,
        }),
    );

    it(
        'removes new attribute from a with tuiOption',
        migrate({
            template: /* HTML */ `
                <a
                    new
                    tuiOption
                >
                    Option
                </a>
            `,
        }),
    );

    it(
        'removes new attribute from label with tuiOption',
        migrate({
            template: /* HTML */ `
                <label
                    new
                    tuiOption
                >
                    Option
                </label>
            `,
        }),
    );

    it(
        'removes new attribute with other attributes',
        migrate({
            template: /* HTML */ `
                <button
                    new
                    tuiOption
                    class="custom"
                    [disabled]="isDisabled"
                >
                    Option
                </button>
            `,
        }),
    );

    it(
        'removes new attribute when tuiOption comes before new',
        migrate({
            template: /* HTML */ `
                <button
                    new
                    tuiOption
                >
                    Option
                </button>
            `,
        }),
    );

    it(
        'does not remove new attribute without tuiOption',
        migrate({
            template: /* HTML */ `
                <button new>Button</button>
            `,
        }),
    );

    it(
        'handles multiple options in template',
        migrate({
            template: /* HTML */ `
                <button
                    new
                    tuiOption
                >
                    Option 1
                </button>
                <button
                    new
                    tuiOption
                >
                    Option 2
                </button>
                <button new>No option</button>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
