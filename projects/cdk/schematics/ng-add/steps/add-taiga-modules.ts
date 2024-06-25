import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {getWorkspace} from '@schematics/angular/utility/workspace';
import type {
    ArrayLiteralExpression,
    CallExpression,
    ClassDeclaration,
    Identifier,
    ObjectLiteralExpression,
    PropertyAssignment,
} from 'ng-morph';
import {
    addImportToComponent,
    addImportToNgModule,
    createProject,
    getMainModule,
    Node,
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
import type {ImportingModule} from '../constants/modules';
import {BROWSER_ANIMATION_MODULE, MAIN_MODULE} from '../constants/modules';
import type {TuiSchema} from '../schema';

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

    modules.forEach(module => {
        addImportToNgModule(mainClass, module.name, {unique: true});
        addUniqueImport(mainModulePath, module.name, module.packageName);
    });

    context.logger.info(
        `${modules.map(module => module.name)} was added to ${mainModulePath}`,
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

    const mainClass = getComponentFromIdentifier(rootComponentIdentifier);

    const optionsObject = getOptionsObject(
        bootstrapOptions as Identifier | ObjectLiteralExpression,
    );

    if (mainClass) {
        addMainModuleToRootComponent({mainClass, options, context});
        addRootTuiProvidersToBootstrapFn(optionsObject);
    }
}

function addRootTuiProvidersToBootstrapFn(
    bootstrapOptions: ObjectLiteralExpression,
): void {
    const property = bootstrapOptions.getProperty('providers') as PropertyAssignment;
    const initializer = property.getInitializer() as ArrayLiteralExpression;
    const provideAnimations = initializer
        .getElements()
        .find(
            el =>
                Node.isCallExpression(el) &&
                el.getExpression().getText() === 'provideAnimations',
        );

    pushToObjectArrayProperty(bootstrapOptions, 'providers', 'NG_EVENT_PLUGINS');
    const modules = [];

    if (!provideAnimations) {
        modules.push({
            name: 'provideAnimations',
            packageName: '@angular/platform-browser/animations',
        });

        pushToObjectArrayProperty(bootstrapOptions, 'providers', 'provideAnimations()', {
            index: 0,
        });
    }

    modules.push({name: 'NG_EVENT_PLUGINS', packageName: '@taiga-ui/event-plugins'});

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
): ObjectLiteralExpression {
    if (Node.isObjectLiteralExpression(options)) {
        return options;
    }

    const definition = options.getDefinitionNodes()[0];

    return definition.getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)[0];
}

export function addTaigaModules(options: TuiSchema): Rule {
    return async (tree: Tree, context: SchematicContext): Promise<Rule | void> => {
        const workspace = await getWorkspace(tree);
        const project = getProjects(options, workspace)[0];

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

            addTuiModules({mainClass, options, context});
        }

        saveActiveProject();
    };
}
