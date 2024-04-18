import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import type {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../../migration.json');

const BEFORE_LOCAL_STYLE = `
.a1 {
    color: var(--tui-text-01);
}

.a2 {
    color: var(--tui-text-02);
}

.a3 {
    color: var(--tui-text-03);
}

.a4 {
    color: var(--tui-text-01-night);
}

.a5 {
    background-color: var(--tui-text-secondary-night);
    color: var(--tui-text-02-night);
}

.a6 {
    background-color: var(--tui-text-tertiary-night);
    color: var(--tui-text-03-night);
}

.a7 {
    color: var(--tui-link);

    &:hover {
        color: var(--tui-link-hover);
    }

    &[tuiTheme='night'] {
        color: var(--tui-link-night);

        &:hover {
            color: var(--tui-link-night-hover);
        }
    }
}

.a8 {
    color: var(--tui-positive);

    &:hover {
        color: var(--tui-positive-hover);
    }

    &[tuiTheme='night'] {
        color: var(--tui-positive-night);

        &:hover {
            color: var(--tui-positive-night-hover);
        }
    }
}

.a9 {
    color: var(--tui-negative);

    &:hover {
        color: var(--tui-negative-hover);
    }

    &[tuiTheme='night'] {
        color: var(--tui-negative-night);

        &:hover {
            color: var(--tui-negative-night-hover);
        }
    }
}

.a10 {
    color: var(--tui-primary-text);
}
`;

const AFTER_LOCAL_STYLE = `
.a1 {
    color: var(--tui-text-primary);
}

.a2 {
    color: var(--tui-text-secondary);
}

.a3 {
    color: var(--tui-text-tertiary);
}

.a4 {
    color: var(--tui-text-primary-on-dark);
}

.a5 {
    background-color: var(--tui-text-secondary-on-dark);
    color: var(--tui-text-secondary-on-dark);
}

.a6 {
    background-color: var(--tui-text-tertiary-on-dark);
    color: var(--tui-text-tertiary-on-dark);
}

.a7 {
    color: var(--tui-text-action);

    &:hover {
        color: var(--tui-text-action-hover);
    }

    &[tuiTheme='night'] {
        color: var(--tui-text-action);

        &:hover {
            color: var(--tui-text-action-hover);
        }
    }
}

.a8 {
    color: var(--tui-text-positive);

    &:hover {
        color: var(--tui-text-positive-hover);
    }

    &[tuiTheme='night'] {
        color: var(--tui-text-positive);

        &:hover {
            color: var(--tui-text-positive-hover);
        }
    }
}

.a9 {
    color: var(--tui-text-negative);

    &:hover {
        color: var(--tui-text-negative-hover);
    }

    &[tuiTheme='night'] {
        color: var(--tui-text-negative);

        &:hover {
            color: var(--tui-text-negative-hover);
        }
    }
}

.a10 {
    color: var(--tui-text-primary-on-accent-1);
}
`;

describe('replace css variables', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host, '/', '**/**'));

        createMainFiles();

        saveActiveProject();
    });

    it('should replace with new global styles', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/app.template.less')).toBe(AFTER_LOCAL_STYLE);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(
        'test/app/app.component.ts',
        `
@Component({
    templateUrl: './app.template.html',
    styleUrls: ['./app.template.less']
})
export class AppComponent {
}
`,
    );

    createSourceFile('test/app/app.template.html', '<app></app>');
    createSourceFile('test/app/app.template.less', BEFORE_LOCAL_STYLE);

    createAngularJson();
    createSourceFile('package.json', '{"dependencies": {"@angular/core": "~13.0.0"}}');
}
