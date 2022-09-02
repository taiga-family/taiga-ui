import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {NodePackageInstallTask, RunSchematicTask} from '@angular-devkit/schematics/tasks';
import {
    addPackageJsonDependency,
    getPackageJsonDependency,
    NodeDependencyType,
    removePackageJsonDependency,
} from 'ng-morph';
import {MAIN_PACKAGES} from './constants/packages';
import {
    DOMPURIFY_TYPES_VERSION,
    DOMPURIFY_VERSION,
    NG_DOMPURIFY_VERSION,
    TAIGA_VERSION,
} from './constants/versions';
import type {Schema} from './schema';

export function ngAdd(options: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        context.logger.info(`The main packages will be installed - ${MAIN_PACKAGES}`);

        addDependencies(tree, options);

        context.addTask(new NodePackageInstallTask(), [
            context.addTask(new RunSchematicTask('ng-add-setup-project', options)),
        ]);
    };
}

function addDependencies(tree: Tree, options: Schema): void {
    const packages = [...MAIN_PACKAGES, ...options.addons];

    packages.forEach(pack => {
        addPackageJsonDependency(tree, {
            name: `@taiga-ui/${pack}`,
            version: TAIGA_VERSION,
        });
    });

    removeTaigaSchematicsPackage(tree);

    if (options.addGlobalStyles) {
        addPackageJsonDependency(tree, {
            name: `@taiga-ui/styles`,
            version: TAIGA_VERSION,
        });
    }

    if (options.addSanitizer) {
        addPackageJsonDependency(tree, {
            name: '@tinkoff/ng-dompurify',
            version: NG_DOMPURIFY_VERSION,
        });
        addPackageJsonDependency(tree, {
            name: 'dompurify',
            version: DOMPURIFY_VERSION,
        });
        addPackageJsonDependency(tree, {
            name: '@types/dompurify',
            version: DOMPURIFY_TYPES_VERSION,
            type: NodeDependencyType.Dev,
        });
    }

    if (packages.includes('addon-table') || packages.includes('addon-mobile')) {
        addAngularCdkDep(tree);
    }
}

function addAngularCdkDep(tree: Tree): void {
    const angularCore = getPackageJsonDependency(tree, '@angular/core')?.version;

    if (!angularCore) {
        return;
    }

    const majorVersionArr = angularCore.match(/[0-9]+/);

    if (majorVersionArr) {
        addPackageJsonDependency(tree, {
            name: '@angular/cdk',
            version: `^${majorVersionArr[0]}.0.0`,
        });
    }
}

function removeTaigaSchematicsPackage(tree: Tree): void {
    try {
        if (!!getPackageJsonDependency(tree, 'taiga-ui')?.version) {
            removePackageJsonDependency(tree, 'taiga-ui');
        }
    } catch {
        // noop
    }
}
