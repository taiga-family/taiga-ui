import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {type TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

const collectionPath = join(__dirname, '../../../migration.json');

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
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createSourceFile('package.json', '{}');

        saveActiveProject();
    });

    it('should migrate slider-ticks-labels mixin in LESS', async () => {
        createSourceFile('test/styles.less', LESS_BEFORE);
        saveActiveProject();

        const tree = await runner.runSchematic(
            'updateToV5',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/styles.less')).toEqual(LESS_AFTER);
    });

    it('should migrate slider-ticks-labels mixin in SCSS', async () => {
        createSourceFile('test/styles.scss', SCSS_BEFORE);
        saveActiveProject();

        const tree = await runner.runSchematic(
            'updateToV5',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/styles.scss')).toEqual(SCSS_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});
