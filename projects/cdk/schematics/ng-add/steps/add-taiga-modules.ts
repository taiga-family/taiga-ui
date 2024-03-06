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
    addImportToNgModule,
    addProviderToComponent,
    addProviderToNgModule,
    createProject,
    getMainModule,
    Node,
    saveActiveProject,
    setActiveProject,
    SyntaxKind,
} from 'ng-morph';
import {addImportToComponent} from 'ng-morph/ng/component/add-import-to-component';

import {ALL_FILES} from '../../constants';
import {addUniqueImport} from '../../utils/add-unique-import';
import {getComponentFromIdentifier} from '../../utils/get-component-from-identifier';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {getProjects} from '../../utils/get-projects';
import {getStandaloneBootstrapFunction} from '../../utils/get-standalone-bootstrap-function';
import {pushToObjectArrayProperty} from '../../utils/push-to-array-property';
import type {ImportingModule} from '../constants/modules';
import {
    ALERT_MODULES,
    BROWSER_ANIMATION_MODULE,
    DIALOG_MODULES,
    MAIN_MODULE,
    SANITIZER_MODULES,
} from '../constants/modules';
import type {TuiSchema} from '../schema';

function addTuiModules({
    mainClass,
    options,
    context,
}: {
    context: SchematicContext;
    mainClass: ClassDeclaration;
    options: TuiSchema;
}): void {
    const modules = getModules(options, [BROWSER_ANIMATION_MODULE]);
    const mainModulePath = mainClass.getSourceFile().getFilePath();

    modules.forEach(module => {
        addImportToNgModule(mainClass, module.name, {unique: true});
        addUniqueImport(mainModulePath, module.name, module.packageName);
    });

    context.logger.info(
        `${modules.map(module => module.name)} was added to ${mainModulePath}`,
    );
}

function addExtraTuiProvidersToRootComponent({
    mainClass,
    options,
    standalone = false,
}: {
    mainClass: ClassDeclaration;
    options: TuiSchema;
    standalone?: boolean;
}): void {
    if (!options.addSanitizer) {
        return;
    }

    const provider = '{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}';

    if (standalone) {
        addProviderToComponent(mainClass, provider, {unique: true});
    } else {
        addProviderToNgModule(mainClass, provider, {unique: true});
    }

    SANITIZER_MODULES.forEach(module => {
        addUniqueImport(
            mainClass.getSourceFile().getFilePath(),
            module.name,
            module.packageName,
        );
    });
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
        addExtraTuiProvidersToRootComponent({mainClass, options, standalone: true});
    }
}

function addRootTuiProvidersToBootstrapFn(
    bootstrapOptions: ObjectLiteralExpression,
): void {
    const property = bootstrapOptions.getProperty('providers') as PropertyAssignment;
    const initializer = property.getInitializer() as ArrayLiteralExpression;
    const providerFrom = initializer
        .getElements()
        .find(
            el =>
                Node.isCallExpression(el) &&
                el.getExpression().getText() === 'importProvidersFrom',
        );
    const provideAnimations = initializer
        .getElements()
        .find(
            el =>
                Node.isCallExpression(el) &&
                el.getExpression().getText() === 'provideAnimations',
        );
    const modules = [MAIN_MODULE];

    if (Node.isCallExpression(providerFrom)) {
        const existing = providerFrom.getArguments();
        const moduleNames = modules
            .map(({name}) => name)
            .filter(
                module =>
                    !existing.some(existingModule => existingModule.getText() === module),
            );

        providerFrom.addArguments(moduleNames);
    } else {
        pushToObjectArrayProperty(
            bootstrapOptions,
            'providers',
            'importProvidersFrom(TuiRootModule)',
        );
    }

    if (!provideAnimations) {
        modules.push({
            name: 'provideAnimations',
            packageName: '@angular/platform-browser/animations',
        });

        pushToObjectArrayProperty(bootstrapOptions, 'providers', 'provideAnimations()', {
            index: 0,
        });
    }

    [...modules, {name: 'importProvidersFrom', packageName: '@angular/core'}].forEach(
        ({name, packageName}) => {
            addUniqueImport(
                bootstrapOptions.getSourceFile().getFilePath(),
                name,
                packageName,
            );
        },
    );
}

function addMainModuleToRootComponent({
    mainClass,
    options,
    context,
}: {
    context: SchematicContext;
    mainClass: ClassDeclaration;
    options: TuiSchema;
}): void {
    const rootComponentPath = mainClass.getSourceFile().getFilePath();

    const modules = getModules(options);

    modules.forEach(({name, packageName}) => {
        addImportToComponent(mainClass, name);
        addUniqueImport(rootComponentPath, name, packageName);
    });

    context.logger.info(
        `${modules.map(({name}) => name)} was added to ${rootComponentPath}`,
    );
}

function getModules(
    options: TuiSchema,
    extraModules?: ImportingModule[],
): ImportingModule[] {
    return [
        ...(extraModules || []),
        MAIN_MODULE,
        ...(options.addDialogsModule ? DIALOG_MODULES : []),
        ...(options.addAlertModule ? ALERT_MODULES : []),
    ];
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
            addExtraTuiProvidersToRootComponent({mainClass, options});
        }

        saveActiveProject();
    };
}
