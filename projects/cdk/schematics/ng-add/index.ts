import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {NodePackageInstallTask, RunSchematicTask} from '@angular-devkit/schematics/tasks';
import {
    addPackageJsonDependency,
    getPackageJsonDependency,
    NodeDependencyType,
    removePackageJsonDependency,
} from 'ng-morph';

import {MAIN_PACKAGES} from './constants/packages';
import {TAIGA_VERSION} from './constants/versions';
import type {TuiSchema} from './schema';

function addDependencies(tree: Tree, options: TuiSchema): void {
    const packages = [...MAIN_PACKAGES, ...options.addons.filter(Boolean)];

    packages.forEach((pack) => {
        addPackageJsonDependency(tree, {
            name: `@taiga-ui/${pack}`,
            version: TAIGA_VERSION,
            type: NodeDependencyType.Default,
        });
    });

    addPackageJsonDependency(tree, {
        name: '@taiga-ui/event-plugins',
        version: '^4.0.2',
    });

    removeTaigaSchematicsPackage(tree);

    if (packages.includes('addon-table') || packages.includes('addon-mobile')) {
        addAngularCdkDep(tree);
    }
}

function addAngularCdkDep(tree: Tree): void {
    const angularCore = getPackageJsonDependency(tree, '@angular/core')?.version;

    if (!angularCore) {
        return;
    }

    const majorVersionArr = /\d+/.exec(angularCore);

    if (majorVersionArr) {
        addPackageJsonDependency(tree, {
            name: '@angular/cdk',
            version: `^${majorVersionArr[0]}.0.0`,
            type: NodeDependencyType.Default,
        });
    }
}

function removeTaigaSchematicsPackage(tree: Tree): void {
    try {
        if (getPackageJsonDependency(tree, 'taiga-ui')?.version) {
            removePackageJsonDependency(tree, 'taiga-ui');
        }
    } catch {
        // noop
    }
}

export function ngAdd(options: TuiSchema): Rule {
    return (tree: Tree, context: SchematicContext): void => {
        context.logger.info(`The main packages will be installed - ${MAIN_PACKAGES}`);

        addDependencies(tree, options);

        context.addTask(new NodePackageInstallTask(), [
            context.addTask(new RunSchematicTask('ng-add-setup-project', options)),
        ]);
    };
}
