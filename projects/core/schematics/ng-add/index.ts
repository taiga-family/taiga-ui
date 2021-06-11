import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {NodePackageInstallTask, RunSchematicTask} from '@angular-devkit/schematics/tasks';
import {addPackageJsonDependency} from 'ng-morph';
import {Schema} from './schema';

const MAIN_PACKAGES = ['core', 'cdk', 'kit'];
const VERSION = '2.11.0';

export function ngAdd(options: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        context.logger.info(`The main packages will be installed - ${MAIN_PACKAGES}`);

        addDependencies(tree, options);

        context.addTask(new RunSchematicTask('ng-add-setup-project', options), [
            context.addTask(new NodePackageInstallTask()),
        ]);
    };
}

function addDependencies(tree: Tree, options: Schema) {
    const packages = [...MAIN_PACKAGES, ...options.addons];

    packages.forEach(pack => {
        addPackageJsonDependency(tree, {
            name: `@taiga-ui/${pack}`,
            version: VERSION,
        });
    });
}
