import {JsonArray, workspaces} from '@angular-devkit/core';
import {Rule, SchematicsException, Tree} from '@angular-devkit/schematics';
import {getWorkspace, updateWorkspace} from '@schematics/angular/utility/workspace';
import {getWorkspaceAndProject} from '../../utils/get-project';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {Schema} from '../schema';

const TAIGA_GLOBAL_STYLE = 'node_modules/@taiga-ui/core/styles/taiga-ui-global.less';
const TAIGA_THEME_STYLE = 'node_modules/@taiga-ui/core/styles/taiga-ui-theme.less';

export function addTaigaStyles(options: Schema): Rule {
    return async (tree: Tree) => {
        const {project, workspace} = await getWorkspaceAndProject(options, tree);

        return addTaigaStylesToAngularJson(workspace, project, options.addDefaultTheme);
    };
}

export function addTaigaStylesToAngularJson(
    workspace: workspaces.WorkspaceDefinition,
    project: workspaces.ProjectDefinition,
    addDefaultTheme: boolean,
): Rule {
    const targetOptions = getProjectTargetOptions(project, 'build');
    const styles = targetOptions.styles as JsonArray | undefined;
    const taigaStyles = [
        TAIGA_GLOBAL_STYLE,
        ...(addDefaultTheme ? [TAIGA_THEME_STYLE] : []),
    ];

    if (!styles) {
        targetOptions.styles = taigaStyles;
    } else {
        targetOptions.styles = [...styles, ...taigaStyles];
    }

    return updateWorkspace(workspace);
}
