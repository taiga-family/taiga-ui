import {type Rule, type SchematicContext, type Tree} from '@angular-devkit/schematics';
import {getWorkspace} from '@schematics/angular/utility/workspace';
import {
    addImportToComponent,
    addImportToNgModule,
    addProviderToNgModule,
    type CallExpression,
    type ClassDeclaration,
    createProject,
    getMainModule,
    type Identifier,
    Node,
    type ObjectLiteralExpression,
    saveActiveProject,
    setActiveProject,
    SyntaxKind,
} from 'ng-morph';

import {ALL_FILES} from '../../constants';
import {addUniqueImport} from '../../utils/add-unique-import';
import {getComponentFromIdentifier} from '../../utils/get-component-from-identifier';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {getProjects} from '../../utils/get-projects';
import {getStandaloneBootstrapFunction} from '../../utils/get-standalone-bootstrap-function';
import {pushToObjectArrayProperty} from '../../utils/push-to-array-property';
import {
    BROWSER_ANIMATION_MODULE,
    type ImportingModule,
    MAIN_MODULE,
} from '../constants/modules';
import {type TuiSchema} from '../schema';

function addTuiModules({
    mainClass,
    context,
}: {
    context: SchematicContext;
    mainClass: ClassDeclaration;
    options: TuiSchema;
}): void {
    const modules = getModules([BROWSER_ANIMATION_MODULE]);
    const mainModulePath = mainClass.getSourceFile().getFilePath();

    modules.forEach((module) => {
        addImportToNgModule(mainClass, module.name, {unique: true});
        addUniqueImport(mainModulePath, module.name, module.packageName);
    });

    addProviderToNgModule(mainClass, 'provideTaiga()', {unique: true});
    addUniqueImport(mainModulePath, 'provideTaiga', '@taiga-ui/core');

    context.logger.info(
        `${modules.map((module) => module.name)} was added to ${mainModulePath}`,
    );
}

function addTuiEntitiesToStandalone({
    bootstrapFunction,
    options,
    context,
}: {
    bootstrapFunction: CallExpression;
    context: SchematicContext;
    options: TuiSchema;
}): void {
    const [
        rootComponentIdentifier,
        bootstrapOptions = bootstrapFunction.addArgument('{providers}: []'),
    ] = bootstrapFunction.getArguments();

    if (!rootComponentIdentifier) {
        return;
    }

    const mainClass = getComponentFromIdentifier(rootComponentIdentifier);

    const optionsObject = getOptionsObject(
        bootstrapOptions as Identifier | ObjectLiteralExpression,
    );

    if (!optionsObject) {
        return;
    }

    if (mainClass) {
        addMainModuleToRootComponent({mainClass, options, context});
        addRootTuiProvidersToBootstrapFn(optionsObject);
    }
}

function addRootTuiProvidersToBootstrapFn(
    bootstrapOptions: ObjectLiteralExpression,
): void {
    pushToObjectArrayProperty(bootstrapOptions, 'providers', 'provideTaiga()');
    const modules = [];

    modules.push({name: 'provideTaiga', packageName: '@taiga-ui/core'});

    modules.forEach(({name, packageName}) => {
        addUniqueImport(
            bootstrapOptions.getSourceFile().getFilePath(),
            name,
            packageName,
        );
    });
}

function addMainModuleToRootComponent({
    mainClass,
    context,
}: {
    context: SchematicContext;
    mainClass: ClassDeclaration;
    options: TuiSchema;
}): void {
    const rootComponentPath = mainClass.getSourceFile().getFilePath();

    const modules = getModules();

    modules.forEach(({name, packageName}) => {
        addImportToComponent(mainClass, name);
        addUniqueImport(rootComponentPath, name, packageName);
    });

    context.logger.info(
        `${modules.map(({name}) => name)} was added to ${rootComponentPath}`,
    );
}

function getModules(extraModules?: ImportingModule[]): ImportingModule[] {
    return [...(extraModules || []), MAIN_MODULE];
}

function getOptionsObject(
    options: Identifier | ObjectLiteralExpression,
): ObjectLiteralExpression | null {
    if (Node.isObjectLiteralExpression(options)) {
        return options;
    }

    const [definition] = options.getDefinitionNodes();

    return definition?.getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)[0] ?? null;
}

export function addTaigaModules(options: TuiSchema): Rule {
    return async (tree: Tree, context: SchematicContext): Promise<Rule | void> => {
        const workspace = await getWorkspace(tree);
        const [project] = getProjects(options, workspace);

        if (!project) {
            context.logger.warn(
                '[WARNING]: Target project not found in current workspace',
            );

            return;
        }

        const buildOptions = getProjectTargetOptions(project, 'build');
        const mainFilePath = (buildOptions.main || buildOptions.browser) as string;

        if (!mainFilePath) {
            context.logger.error('[ERROR]: Could not find the project main file');

            return;
        }

        setActiveProject(createProject(tree, '/', ALL_FILES));

        const bootstrapFunction = getStandaloneBootstrapFunction(mainFilePath);

        if (bootstrapFunction) {
            addTuiEntitiesToStandalone({
                bootstrapFunction,
                options,
                context,
            });
        } else {
            const mainClass = getMainModule(mainFilePath);

            if (mainClass) {
                addTuiModules({mainClass, options, context});
            }
        }

        saveActiveProject();
    };
}
