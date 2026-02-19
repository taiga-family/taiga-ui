import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

const LESS_BEFORE = `
@import '@taiga-ui/styles/utils';

.ticks-labels {
    .tui-slider-ticks-labels(l);
}

.another-class {
    .tui-slider-ticks-labels(m);
    color: red;
}

.with-important {
    .tui-slider-ticks-labels(s) !important;
}

.already-migrated {
    .tui-slider-ticks-labels();
}
`;

const LESS_AFTER = `
@import '@taiga-ui/styles/utils';

.ticks-labels {
    .tui-slider-ticks-labels();
}

.another-class {
    .tui-slider-ticks-labels();
    color: red;
}

.with-important {
    .tui-slider-ticks-labels() !important;
}

.already-migrated {
    .tui-slider-ticks-labels();
}
`;

const SCSS_BEFORE = `
@import '@taiga-ui/styles/utils';

.ticks-labels {
    @include tui-slider-ticks-labels(l);
}

.another-class {
    @include tui-slider-ticks-labels(m);
}
`;

const SCSS_AFTER = `
@import '@taiga-ui/styles/utils';

.ticks-labels {
    @include tui-slider-ticks-labels();
}

.another-class {
    @include tui-slider-ticks-labels();
}
`;

describe('ng-update v5: migrate mixins', () => {
    async function migrate(styles: string): Promise<string> {
        const {styles: result} = await runMigration({
            styles,
            collection,
        });

        return result;
    }

    it('should migrate slider-ticks-labels mixin in LESS', async () => {
        expect(await migrate(LESS_BEFORE)).toBe(LESS_AFTER);
    });

    it('should migrate slider-ticks-labels mixin with SCSS @include syntax', async () => {
        expect(await migrate(SCSS_BEFORE)).toBe(SCSS_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
