import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update FilterByInput migration', () => {
    afterEach(() => resetActiveProject());

    it(
        'migrates TuiFilterByInputPipe from @taiga-ui/kit to @taiga-ui/core',
        migrate({component: "import {TuiFilterByInputPipe} from '@taiga-ui/kit';"}),
    );

    it(
        'does not affect unrelated @taiga-ui/kit imports when migrating TuiFilterByInputPipe',
        migrate({
            component: "import {TuiFilterByInputPipe, TuiAvatar} from '@taiga-ui/kit';",
        }),
    );

    it(
        'keeps TuiFilterByInputPipe usage in components array after migration',
        migrate({
            component: `import {TuiFilterByInputPipe} from '@taiga-ui/kit';

@Component({
    imports: [TuiFilterByInputPipe],
})
export class TestComponent {}
        `,
        }),
    );

    it(
        'migrates matcher (2nd argument of tuiFilterByInput) to new API',
        migrate({
            component: `
import {TuiStringMatcher} from '@taiga-ui/core';
import {TuiFilterByInputPipe} from '@taiga-ui/kit';

@Component({
    template: \`
<tui-data-list-wrapper [items]="items | tuiFilterByInput: matcherByDigit" />
<tui-data-list-wrapper [items]="items | tuiFilterByInput: matcherByName" />
    \`',
})
export class Example {
    items = ['Charles III', 'Elizabeth II'];
    value: string | null = null;

    // to ensure schematics keeps it untouched
    justAnotherMatcher: TuiStringMatcher<string> =
        (item, query) => item.toLowerCase().includes(query.toLowerCase());

    matcherByDigit: TuiStringMatcher<string> = (item, query) => {
        const romanNumeral = item.split(' ').at(-1);

        return (
            query === ROMAN_TO_LATIN[romanNumeral] ||
            item.toLowerCase().includes(query.toLowerCase())
        );
    };

    matcherByName =
        (item: string, query: string) => item.toLowerCase().includes(query.toLowerCase());
}`,
        }),
    );

    it(
        'migrates matcher (2nd argument of tuiFilterByInput) to new API — external template',
        migrate({
            component: `
import {TuiStringMatcher} from '@taiga-ui/core';
import {TuiFilterByInputPipe} from '@taiga-ui/kit';

@Component({
    templateUrl: './test.html',
})
export class Example {
    items = ['Charles III', 'Elizabeth II'];
    value: string | null = null;

    matcherByDigit: TuiStringMatcher<string> = (item, query) => {
        const romanNumeral = item.split(' ').at(-1);

        return (
            query === ROMAN_TO_LATIN[romanNumeral] ||
            item.toLowerCase().includes(query.toLowerCase())
        );
    };

    matcherByName =
        (item: string, query: string) => item.toLowerCase().includes(query.toLowerCase());
}`,
            template: `
<tui-data-list-wrapper [items]="items | tuiFilterByInput: matcherByDigit" />
<tui-data-list-wrapper [items]="items | tuiFilterByInput: matcherByName" />
`,
        }),
    );

    it(
        'does not add filterWith wrapper when tuiFilterByInput has no second argument',
        migrate({
            component: `
import {TuiFilterByInputPipe} from '@taiga-ui/kit';

@Component({
    template: \`<tui-data-list-wrapper [items]="items | tuiFilterByInput" />\`,
})
export class Example {
    items = ['a', 'b'];
}`,
        }),
    );

    it(
        'does not duplicate filterWith wrapper when migration runs again (idempotent)',
        migrate({
            component: `import { TuiFilterByInputPipe, TuiFilterByInputOptions } from '@taiga-ui/core';

@Component({
    template: \`<tui-data-list-wrapper [items]="items | tuiFilterByInput: filterWithMatcher" />\`,
})
export class Example {
    items = ['a', 'b'];

    matcher = (item: string, query: string) => item.includes(query);

    filterWithMatcher: TuiFilterByInputOptions['filter'] = (items, query, stringify) => items.filter((item) => this.matcher(item, query, stringify));
}`,
        }),
    );

    it(
        'wraps a plain function reference (e.g. TUI_DEFAULT_MATCHER) used as second argument',
        migrate({
            component: `
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {TuiFilterByInputPipe} from '@taiga-ui/kit';

@Component({
    template: \`<tui-data-list-wrapper [items]="items | tuiFilterByInput: defaultMatcher" />\`,
})
export class Example {
    items = ['a', 'b'];

    defaultMatcher = TUI_DEFAULT_MATCHER;
}`,
        }),
    );
});
