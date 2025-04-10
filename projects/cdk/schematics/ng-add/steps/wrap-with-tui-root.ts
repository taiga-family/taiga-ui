import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {getWorkspace} from '@schematics/angular/utility/workspace';
import type {ClassDeclaration, Expression, Identifier} from 'ng-morph';
import {
    createProject,
    getMainModule,
    Node,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {ALL_FILES} from '../../constants';
import {getComponentFromIdentifier} from '../../utils/get-component-from-identifier';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {getProjects} from '../../utils/get-projects';
import {getStandaloneBootstrapFunction} from '../../utils/get-standalone-bootstrap-function';
import type {TuiSchema} from '../schema';

function addTuiRoot(filePath: string, context: SchematicContext, tree: Tree): void {
    const buffer = tree.read(filePath);

    if (!buffer) {
        context.logger.error(
            `Could not read the default template file within the project ${filePath}`,
        );
        context.logger.info(
            'Consider manually wrapping content of your app with tui-root',
        );

        return;
    }

    const htmlContent = buffer.toString();
    const openTag = '<tui-root>\n';
    const closeTag = '\n</tui-root>';

    if (htmlContent.includes(openTag)) {
        return;
    }

    const recorder = tree.beginUpdate(filePath);

    recorder.insertLeft(0, openTag);
    recorder.insertLeft(templateLength(htmlContent), closeTag);
    tree.commitUpdate(recorder);
    context.logger.info(
        `Content of the app was wrapped with tui-root component in ${filePath}`,
    );
}

function getAppTemplatePath(mainPath: string): string {
    const standaloneBootstrapFunction = getStandaloneBootstrapFunction(mainPath);

    if (standaloneBootstrapFunction) {
        const [componentIdentifier] = standaloneBootstrapFunction.getArguments();

        if (componentIdentifier) {
            const component = getComponentFromIdentifier(componentIdentifier);

            if (component) {
                return getTemplatePathFromComponent(component);
            }
        }

        return '';
    }

    const mainModule = getMainModule(mainPath);

    if (!mainModule) {
        return '';
    }

    const mainInitializer = getTemplateInitializer(
        mainModule,
        'NgModule',
        'declarations',
    );

    if (!mainInitializer || !Node.isArrayLiteralExpression(mainInitializer)) {
        return '';
    }

    const appIdentifier = mainInitializer.getElements()[0] as Identifier;
    const appComponent = appIdentifier.getDefinitionNodes()[0] as ClassDeclaration;

    return getTemplatePathFromComponent(appComponent);
}

function getTemplatePathFromComponent(component: ClassDeclaration): string {
    const templateInitializer = getTemplateInitializer(
        component,
        'Component',
        'templateUrl',
    );

    const appComponentPath = component.getSourceFile().getFilePath().split('/');

    return `${appComponentPath
        .splice(0, appComponentPath.length - 1)
        .join('/')}/${templateInitializer?.getText().replaceAll(/['"]/g, '')}`;
}

function getTemplateInitializer(
    classDeclaration: ClassDeclaration,
    decoratorName: string,
    propertyName: string,
): Expression | null {
    const decorator = classDeclaration.getDecorator(decoratorName);

    if (!decorator) {
        return null;
    }

    const [metadata] = decorator.getArguments();

    if (!Node.isObjectLiteralExpression(metadata)) {
        return null;
    }

    const property = metadata.getProperty(propertyName);

    if (!Node.isPropertyAssignment(property)) {
        return null;
    }

    return property.getInitializer() ?? null;
}

export function wrapWithTuiRoot(options: TuiSchema): Rule {
    return async (tree: Tree, context: SchematicContext): Promise<Rule | void> => {
        const workspace = await getWorkspace(tree);
        const [project] = getProjects(options, workspace);

        if (!project) {
            return;
        }

        const buildOptions = getProjectTargetOptions(project, 'build');

        setActiveProject(createProject(tree, '/', ALL_FILES));
        const appTemplatePath = getAppTemplatePath(buildOptions.main as string);

        saveActiveProject();

        if (!appTemplatePath) {
            context.logger.error(
                'Could not find the default main template file for this project.',
            );
            context.logger.info(
                'Consider manually wrapping content of your app with tui-root',
            );
            context.logger.info(
                'More information at https://taiga-ui.dev/getting-started',
            );

            return;
        }

        addTuiRoot(appTemplatePath, context, tree);
    };
}

function templateLength(template: string): number {
    // utf8 with BOM adds an extra character to the beginning of the string
    return template.charCodeAt(0) === 0xfeff ? template.length - 1 : template.length;
}
