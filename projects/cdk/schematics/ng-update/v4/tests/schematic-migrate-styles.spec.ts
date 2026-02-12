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

const STYLES_BEFORE = `
@import '@taiga-ui/proprietary-core/styles/tinkoff-fonts';
@import '@taiga-ui/core/styles/taiga-ui-local.less';

:host {
    display: flex;
    align-items: center;
    .tui-space(bottom, 2);
    .shadow();
    justify-content: center;
    --tui-rating-size: 1.5rem;

    --tui-rating-gap: 0.5rem;
}

.example {
    .text-overflow();
    .tui-space(vertical, 4);
    .text-h3();
    .customize-scroll();
    padding-top: @space * 2;
}

.one-more-class {
    .tui-space(horizontal, -4);
    .text-body-m-bold(1);
    .shadow(3);
    .createStackingContext() !important;
}

.hack {
    .tui-space(top, 0) !important;
    .tui-space(horizontal, -4) !important;
    .createStackingContext();
}

.t-scrollbar {
    .scroll-behavior();
}

.horizontal {
    .scroll-behavior();
}
`;

const STYLES_AFTER = `@import '@taiga-ui/legacy/styles/taiga-ui-local';

@import '@taiga-ui/proprietary/styles/tbank-fonts';
@import '@taiga-ui/core/styles/taiga-ui-local.less';

:host {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    box-shadow: var(--tui-shadow-small);
    justify-content: center;
// TODO: (Taiga UI migration): use css to customize rating gap and size. See https://taiga-ui.dev/components/rating#basic
    --tui-rating-size: 1.5rem;

// TODO: (Taiga UI migration): use css to customize rating gap and size. See https://taiga-ui.dev/components/rating#basic
    --tui-rating-gap: 0.5rem;
}

.example {
    .text-overflow();
    margin-top: 1rem;
margin-bottom: 1rem;
    font: var(--tui-typography-heading-h3);
    .customize-scroll();
    padding-top: 0.25rem * 2;
}

.one-more-class {
    margin-left: -1rem;
margin-right: -1rem;
    .text-body-m-bold(1); // TODO: this mixin was deleted. Replace it with inline styles. Find it source code in https://github.com/taiga-family/taiga-ui/blob/v3.x/projects/core/styles/mixins/text.less
    box-shadow: var(--tui-shadow-popup);
    isolation: isolate !important;
}

.hack {
    margin-top: 0rem !important;
    margin-left: -1rem !important;
margin-right: -1rem !important;
    isolation: isolate;
}

.t-scrollbar {
    scroll-behavior: var(--tui-scroll-behavior);
}

.horizontal {
    scroll-behavior: var(--tui-scroll-behavior);
}
`;

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should migrate styles', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/styles.less')).toEqual(STYLES_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/styles.less', STYLES_BEFORE);
    createSourceFile('package.json', '{}');
}
