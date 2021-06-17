import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {getAppModulePath} from '@schematics/angular/utility/ng-ast-utils';
import {
    ClassDeclaration,
    createProject,
    Expression,
    getMainModule,
    Identifier,
    Node,
    saveActiveProject,
    setActiveProject,
    ts,
} from 'ng-morph';
import {getWorkspaceAndProject} from '../../utils/get-project';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {Schema} from '../schema';

export function wrapWithTuiRootComponent(options: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        const {project} = await getWorkspaceAndProject(options, tree);
        const buildOptions = getProjectTargetOptions(project, 'build');
        const modulePath = getAppModulePath(tree, buildOptions.main as string);

        const app = getAppTemplatePathNew(tree, buildOptions.main as string);
        // const appTemplatePath = getAppTemplatePath(modulePath);

        // addTuiRootComponent(appTemplatePath, context, tree);
    };
}

function addTuiRootComponent(filePath: string, context: SchematicContext, tree: Tree) {
    if (!filePath) {
        context.logger.error(
            'Could not find the default main template file for this project.',
        );
        context.logger.info(
            'Consider manually wrapping content of your app with tui-root',
        );
        context.logger.info('More information at https://taiga-ui.dev/getting-started');

        return;
    }

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
    const openTag = '<tui-root>' + '\n';
    const closeTag = '\n' + '</tui-root>';

    if (htmlContent.includes(openTag)) {
        return;
    }

    const recorder = tree.beginUpdate(filePath);

    recorder.insertLeft(0, openTag);
    recorder.insertLeft(htmlContent.length, closeTag);
    tree.commitUpdate(recorder);
    context.logger.info(
        `Content of the app wad wrapped with tui-root component in ${filePath}`,
    );
}

function getAppTemplatePath(appModulePath: string): string {
    const pathArray = appModulePath.split('/');
    const appModuleFileName = pathArray[pathArray.length - 1];
    const templatePath = `${pathArray.slice(0, -1).join('/')}/${
        appModuleFileName.split('.')[0]
    }.template.html`;

    return templatePath;
}

function getAppTemplatePathNew(tree: Tree, modulePath: string) {
    setActiveProject(createProject(tree, '/', ['**/*.ts', '**/*.json']));

    const mainModule = getMainModule(modulePath);
    const decorator = mainModule.getDecorator('NgModule');
    const [metadata] = decorator!.getArguments();

    if (!Node.isObjectLiteralExpression(metadata)) {
        return;
    }

    const property = metadata.getProperty('declarations');

    if (!Node.isPropertyAssignment(property)) {
        return;
    }

    const initializer = property.getInitializer();

    if (!Node.isArrayLiteralExpression(initializer)) {
        return;
    }

    const identifier = initializer.getElements()[0] as Identifier;
    const appComponent = identifier.getDefinitionNodes()[0] as ClassDeclaration;

    const appComponentDecorator = appComponent.getDecorator('Component');
    const [appComponentMetadata] = appComponentDecorator!.getArguments();

    if (!Node.isObjectLiteralExpression(appComponentMetadata)) {
        return;
    }

    const appComponentProperty = appComponentMetadata.getProperty('templateUrl');

    if (!Node.isPropertyAssignment(appComponentProperty)) {
        return;
    }

    const templateInitializer = appComponentProperty.getInitializer();

    const appComponentPath = appComponent.getSourceFile().getFilePath().split('/');

    const templateUrlPath = `${appComponentPath
        .splice(0, appComponentPath.length - 1)
        .join('/')}/${templateInitializer?.getText()}`;

    saveActiveProject();
}
