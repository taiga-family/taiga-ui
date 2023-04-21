import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {getWorkspace} from '@schematics/angular/utility/workspace';
import {
    ClassDeclaration,
    createProject,
    Expression,
    getMainModule,
    Identifier,
    Node,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {ALL_FILES} from '../../constants';
import {getComponentFromIdentifier} from '../../utils/get-component-from-identifier';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {getProjects} from '../../utils/get-projects';
import {getStandaloneBootstrapFunction} from '../../utils/get-standalone-bootstrap-function';
import {TuiSchema} from '../schema';

export function wrapWithTuiRootComponent(options: TuiSchema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        const workspace = await getWorkspace(tree);
        const project = getProjects(options, workspace)[0];

        if (!project) {
            return;
        }

        const buildOptions = getProjectTargetOptions(project, `build`);

        setActiveProject(createProject(tree, `/`, ALL_FILES));
        const appTemplatePath = getAppTemplatePath(buildOptions.main as string);

        saveActiveProject();

        if (!appTemplatePath) {
            context.logger.error(
                `Could not find the default main template file for this project.`,
            );
            context.logger.info(
                `Consider manually wrapping content of your app with tui-root`,
            );
            context.logger.info(
                `More information at https://taiga-ui.dev/getting-started`,
            );

            return;
        }

        addTuiRootComponent(appTemplatePath, context, tree);
    };
}

function addTuiRootComponent(
    filePath: string,
    context: SchematicContext,
    tree: Tree,
): void {
    const buffer = tree.read(filePath);

    if (!buffer) {
        context.logger.error(
            `Could not read the default template file within the project ${filePath}`,
        );
        context.logger.info(
            `Consider manually wrapping content of your app with tui-root`,
        );

        return;
    }

    const htmlContent = buffer.toString();
    const openTag = `<tui-root>\n`;
    const closeTag = `\n</tui-root>`;

    if (htmlContent.includes(openTag)) {
        return;
    }

    const recorder = tree.beginUpdate(filePath);

    recorder.insertLeft(0, openTag);
    recorder.insertLeft(htmlContent.length, closeTag);
    tree.commitUpdate(recorder);
    context.logger.info(
        `Content of the app was wrapped with tui-root component in ${filePath}`,
    );
}

function getAppTemplatePath(mainPath: string): string | undefined {
    const stansdaloneBootstrapFunction = getStandaloneBootstrapFunction(mainPath);

    if (stansdaloneBootstrapFunction) {
        const [componentIdentifier] = stansdaloneBootstrapFunction.getArguments();
        const component = getComponentFromIdentifier(componentIdentifier);

        return component && getTemplatePathFromComponent(component);
    }

    const mainModule = getMainModule(mainPath);
    const mainInitializer = getTemplateInitializer(
        mainModule,
        `NgModule`,
        `declarations`,
    );

    if (!Node.isArrayLiteralExpression(mainInitializer)) {
        return;
    }

    const appIdentifier = mainInitializer.getElements()[0] as Identifier;
    const appComponent = appIdentifier.getDefinitionNodes()[0] as ClassDeclaration;

    const templateUrlPath = getTemplatePathFromComponent(appComponent);

    return templateUrlPath;
}

function getTemplatePathFromComponent(component: ClassDeclaration): string {
    const templateInitializer = getTemplateInitializer(
        component,
        `Component`,
        `templateUrl`,
    );

    const appComponentPath = component.getSourceFile().getFilePath().split(`/`);

    const templateUrlPath = `${appComponentPath
        .splice(0, appComponentPath.length - 1)
        .join(`/`)}/${templateInitializer?.getText().replace(/['"]/g, ``)}`;

    return templateUrlPath;
}

function getTemplateInitializer(
    classDeclaration: ClassDeclaration,
    decoratorName: string,
    propertyName: string,
): Expression | undefined {
    const decorator = classDeclaration.getDecorator(decoratorName);

    if (!decorator) {
        return;
    }

    const [metadata] = decorator.getArguments();

    if (!Node.isObjectLiteralExpression(metadata)) {
        return;
    }

    const property = metadata.getProperty(propertyName);

    if (!Node.isPropertyAssignment(property)) {
        return;
    }

    return property.getInitializer();
}
