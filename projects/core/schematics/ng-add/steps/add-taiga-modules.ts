import {
    Rule,
    SchematicContext,
    SchematicsException,
    Tree,
} from '@angular-devkit/schematics';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import {addImportToModule} from '@schematics/angular/utility/ast-utils';
import {InsertChange} from '@schematics/angular/utility/change';
import {getAppModulePath} from '@schematics/angular/utility/ng-ast-utils';

import {
    addProviderToModule,
    createProject,
    getMainModule,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {getWorkspaceAndProject} from '../../utils/get-project';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {
    DIALOG_MODULES,
    ImportingModule,
    MAIN_MODULES,
    NOTIFICATION_MODULES,
} from '../constants/modules';
import {Schema} from '../schema';

export function addTaigaModules(options: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        const {project} = await getWorkspaceAndProject(options, tree);
        const buildOptions = getProjectTargetOptions(project, 'build');
        const modulePath = getAppModulePath(tree, buildOptions.main as string);

        addModules(tree, modulePath, options);
        // addTuiProviderToModule(tree, modulePath);
    };
}

function addModules(tree: Tree, targetModulePath: string, options: Schema) {
    const modules = [
        ...MAIN_MODULES,
        ...(options.addDialogsModule ? DIALOG_MODULES : []),
        ...(options.addNotificationsModule ? NOTIFICATION_MODULES : []),
    ];

    modules.forEach(module => {
        addModuleImportToModule(tree, targetModulePath, module);
    });
}

// function addTuiProviderToModule(tree: Tree, modulePath: string) {
//     setActiveProject(createProject(tree, '/', ['**/*.ts', '**/*.json']));

//     const mainModule = getMainModule(modulePath);

//     addProviderToModule(mainModule, '{provide: TUI_SANITIZER, useValue: ngDomPurify}');
//     saveActiveProject();
// }

function addModuleImportToModule(
    tree: Tree,
    modulePath: string,
    module: ImportingModule,
) {
    const source = getModuleSource(tree, modulePath);
    const changes = addImportToModule(
        source,
        modulePath,
        module.name,
        module.packageName,
    );
    const recorder = tree.beginUpdate(modulePath);

    for (const change of changes) {
        if (change instanceof InsertChange) {
            recorder.insertLeft(change.pos, change.toAdd);
        }
    }

    tree.commitUpdate(recorder);
}

function getModuleSource(tree: Tree, modulePath: string): ts.SourceFile {
    const text = tree.read(modulePath);

    if (!text) {
        throw new SchematicsException(`File '${modulePath}' does not exist.`);
    }

    return ts.createSourceFile(
        modulePath,
        text.toString('utf-8'),
        ts.ScriptTarget.Latest,
        true,
    );
}
