import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';

import {getWorkspace} from '@schematics/angular/utility/workspace';
import {
    addImportToNgModule,
    addProviderToNgModule,
    ClassDeclaration,
    createProject,
    getMainModule,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {getProject} from '../../utils/get-project';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {
    ALERT_MODULES,
    DIALOG_MODULES,
    MAIN_MODULES,
    SANITIZER_MODULES,
} from '../constants/modules';
import type {Schema} from '../schema';
import {addUniqueImport} from '../../utils/add-unique-import';

export function addTaigaModules(options: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        const workspace = await getWorkspace(tree);
        const project = getProject(options, workspace);

        if (!project) {
            context.logger.warn(
                '[WARNING]: Target project not found in current workspace',
            );
            return;
        }

        const buildOptions = getProjectTargetOptions(project, 'build');

        setActiveProject(createProject(tree, '/', ['**/*.ts', '**/*.json']));

        const mainModule = getMainModule(buildOptions.main as string);

        addTuiModules(mainModule, options, context);
        addTuiProviders(mainModule, options);

        saveActiveProject();
    };
}

function addTuiModules(
    mainModule: ClassDeclaration,
    options: Schema,
    context: SchematicContext,
) {
    const modules = [
        ...MAIN_MODULES,
        ...(options.addDialogsModule ? DIALOG_MODULES : []),
        ...(options.addAlertModule ? ALERT_MODULES : []),
    ];

    const mainModulePath = mainModule.getSourceFile().getFilePath();

    modules.forEach(module => {
        addImportToNgModule(mainModule, module.name, {unique: true});
        addUniqueImport(mainModulePath, module.name, module.packageName);
    });

    context.logger.info(
        `${modules.map(module => module.name)} was added to ${mainModulePath}`,
    );
}

function addTuiProviders(mainModule: ClassDeclaration, options: Schema): void {
    if (!options.addSanitizer) {
        return;
    }

    addProviderToNgModule(
        mainModule,
        '{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}',
        {unique: true},
    );

    SANITIZER_MODULES.forEach(module => {
        addUniqueImport(
            mainModule.getSourceFile().getFilePath(),
            module.name,
            module.packageName,
        );
    });
}
